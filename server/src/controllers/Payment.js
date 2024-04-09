const { User, Wallet } = require('../db');
const axios = require("axios").default;
const { genRandonString, getDateUTC, getSignature } = require("../helpers/helpers");

let KEY = "";
if (process.env.MODE === "TEST") {
    KEY = process.env.CLAVE_TEST;
    PASSWORD = process.env.TEST_PASSWORD;
} else {
    KEY = process.env.CLAVE_PRODUCCION;
    PASSWORD = process.env.PROD_PASSWORD;
}
module.exports = {
    Payment: async (req, res) => {
        const { amount } = req.body;
        const params = new URLSearchParams();
        const userId = req.user.id;

        try {
            const user = await User.findOne({ where: { email: req.user.email } });
            if (!user) {
                return res.status(404).json({ success: false, error: 'Usuario no encontrado' });
            }
            const wallet = await Wallet.findOne({ where: { userId } });
            if (!wallet) {
                console.log('Billetera no encontrada');
                return res.status(404).json({ success: false, error: 'Billetera no encontrada' });
            }
            if (amount <= 0) {
                console.log('La cantidad debe ser un valor positivo');
                return res.status(400).json({ success: false, error: 'La cantidad debe ser un valor positivo' });
            }

            // Sumar el monto del depósito al saldo actual de la billetera
            await wallet.increment('balance', { by: amount });

            const obj = {
                vads_action_mode: "INTERACTIVE",
                vads_amount: amount * 100,
                vads_ctx_mode: process.env.MODE,
                vads_currency: 840, /* currency=="PEN"?604:840 , */
                vads_cust_email: user.email,
                vads_cust_name: `${user.name} ${user.lastName}`,
                vads_order_id: new Date().getTime(),
                vads_page_action: "PAYMENT",
                vads_payment_config: "SINGLE",
                vads_site_id: process.env.ID_TIENDA,
                vads_trans_date: getDateUTC(),
                vads_trans_id: genRandonString(6),
                vads_version: "V2",
            }

            for (const property in obj) {
                params.append(property, obj[property])
            }

            const signature = getSignature(obj, KEY);
            params.append("signature", signature);
            axios.post("https://secure.micuentaweb.pe/vads-payment/entry.silentInit.a", params)
                .then(response => {
                    res.status(200).send(response.data);
                })
                .catch(error => {
                    res.status(400).json(error.message)
                })
        } catch (error) {
            console.error('Error al crear la sesión:', error);
            return res.status(500).json({ message: 'Error del servidor' });
        }
    },
};
