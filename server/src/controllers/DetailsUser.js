const { User, Wallet, Coin, OperationOpen } = require('../db');

module.exports = {
  DetailsUser: async (req, res) => {
    const {walletId} = req.params
        try {
          const userWallet = await Wallet.findByPk(walletId, {
            include: [{
                model: User // Utiliza el modelo Wallet en la inclusión
            }]
        });

            if (!userWallet) {
                console.log("Usuario no encontrado");
                return res.status(404).send({ success: false, data: "Usuario no encontrado" });
            }

            return res.status(200).send({ success: true, data: userWallet });

        } catch (error) {
            console.error('Error al obtener información del usuario:', error);
            return res.status(500).json({ success: false, error: 'Error al obtener información del usuario' });
        }
    }
};
