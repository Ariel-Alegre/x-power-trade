const { Wallet, Coin, OperationOpen } = require('../db');
const axios = require('axios');

module.exports = {
    BuyCoins: async (req, res) => {
        const { coinId, amount } = req.body;
        const userId = req.user.id;

        try {


            // Verificar si la billetera del usuario existe
            const wallet = await Wallet.findOne({ where: { userId } });
            if (!wallet) {
                return res.status(404).json({ success: false, error: 'Billetera no encontrada' });
            }

            // Verificar si la moneda digital seleccionada existe
            const coin = await Coin.findByPk(coinId);
            if (!coin) {
                console.log("Moneda digital no encontrada");
                return res.status(404).json({ success: false, error: 'Moneda digital no encontrada' });
            }

            // Calcular la cantidad de moneda digital que el usuario compra
            const percentage = amount / parseFloat(coin.edited_price_purchase   || coin.price);

            // Verificar si el saldo en la billetera es suficiente para realizar la compra
            if (wallet.balance < amount) {
                console.log('Saldo insuficiente');
                return res.status(400).json({ success: false, error: 'Saldo insuficiente' });
            }

            // Actualizar el saldo en la billetera
            wallet.balance -= amount;
            wallet.pl_open += amount;
            wallet.neto = wallet.balance + wallet.pl_open;

            await wallet.save();

            // Registrar la transacción de compra en la base de datos
            await OperationOpen.create({
                userId,
                coinId,
                image: coin.image,
                symbol: coin.symbol,
                price_change_percentage_24h: coin.price_change_percentage_24h,
                total_volume: coin.total_volume,
                edited_price_purchase: coin.edited_price,
                expiration_time: coin.expiration_time,
                amount,
                payAmount: coin.pricePurchase,
                percentage,
                pipValue: coin.pipValue,
                priceSale: coin.edited_price_sale || coin.priceSale,
                pricePurchase: coin.edited_price_purchase || coin.pricePurchase,
                total: amount,
            });

            // Enviar una respuesta exitosa
            console.log('Compra de moneda digital exitosa');
            res.status(200).json({ success: true, message: 'Compra de moneda digital exitosa' });
        } catch (error) {
            console.error('Error al comprar moneda digital:', error);
            res.status(500).json({ success: false, error: 'Error al comprar moneda digital' });
        }
    }
};
