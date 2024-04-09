const { User, Wallet, Coin, OperationOpen } = require('../db');
const axios = require('axios');

module.exports = {
    InfoUsers: async (req, res) => {
        console.log("Buscando usuario con ID:", userId) 

        try {
            const user = await Wallet.findByPk(userId, {
                include: [{
                    model: User // Utiliza el modelo Wallet en la inclusión
                }]
            });

            if (!user) {
                console.log("Usuario no encontrado");
                return res.status(404).send({ success: false, data: "Usuario no encontrado" });
            }

            return res.status(200).send({ success: true, user });

        } catch (error) {
            console.error('Error al obtener información del usuario:', error);
            return res.status(500).json({ success: false, error: 'Error al obtener información del usuario' });
        }
    }
};
