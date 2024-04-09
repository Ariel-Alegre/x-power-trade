const { Wallet, OperationOpen } = require('../db');

module.exports = {
    SellCoins: async (req, res) => {
        const { coinId, amount } = req.body;
        const userId = req.user.id;

        try {
            // Verificar si la billetera del usuario existe
            const wallet = await Wallet.findOne({ where: { userId } });
            if (!wallet) {
                return res.status(404).json({ success: false, error: 'Billetera no encontrada' });
            }

            // Verificar si la moneda digital seleccionada existe en OperationOpens
            const operation = await OperationOpen.findOne({ where: { userId, coinId } });
            if (!operation) {
                console.log('No has comprado esta moneda antes, no puedes venderla');
                return res.status(400).json({ success: false, error: 'No has comprado esta moneda antes, no puedes venderla' });
            }

            // Verificar si el usuario ha comprado suficiente cantidad de la moneda para vender
            if (operation.amount < amount) {
                console.log('No tienes suficiente cantidad de la moneda para vender');
                return res.status(400).json({ success: false, error: 'No tienes suficiente cantidad de la moneda para vender' });
            }

            // Resta la cantidad vendida de la transacción de compra
            operation.amount -= amount;
            await operation.save();

            // Elimina la transacción si la cantidad restante es cero
            if (operation.amount === 0) {
                await operation.destroy();
            }

            // Calcula el monto total de la venta
            const totalAmount = amount;

            // Agrega el monto total a la billetera del usuario
            wallet.balance += totalAmount;
            wallet.pl_open -= totalAmount;
            await wallet.save();

            // Envía una respuesta exitosa
            console.log('Venta de moneda digital exitosa');
            res.status(200).json({ success: true, message: 'Venta de moneda digital exitosa' });
        } catch (error) {
            console.error('Error al vender moneda digital:', error);
            res.status(500).json({ success: false, error: 'Error al vender moneda digital' });
        }
    }
};
