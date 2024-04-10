const { Wallet } = require('../db');

module.exports = {
    UpdateWallets: async (req, res) => {
        const { walletId } = req.params;
        const { balance, pl_open, neto } = req.body;

        try {
            const wallet = await Wallet.findByPk(walletId);
            if (!wallet) {
                return res.status(404).json({ success: false, error: 'Billetera no encontrada' });
            }

            // Actualizar el balance de la billetera
            wallet.balance = balance;
            wallet.pl_open = pl_open;
            wallet.neto = neto;

            await wallet.save();
  console.log("Balance actualizado correctamente");
            return res.status(200).json({ success: true, message: 'Balance actualizado correctamente' });
        } catch (error) {
            console.error('Error al actualizar fondos a la billetera del usuario:', error);
            res.status(500).json({ success: false, error: 'Error al actualizar fondos a la billetera del usuario' });
        }
    }
};
