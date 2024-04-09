const { Wallet } = require('../db'); // Ajusta la ruta según la ubicación de tu modelo Wallet

module.exports = {
  WalletBalance: async (req, res) => {
    const { amount } = req.body;
    const userId = req.user.id; // Asegúrate de que req.user.id esté presente y sea válido
  
    // Verifica si amount es un número válido y positivo
    if (typeof amount !== 'number' || amount <= 0) {
      console.log('La cantidad debe ser un número válido y positivo');
      return res.status(400).json({ success: false, error: 'La cantidad debe ser un número válido y positivo' });
    }
  
    try {
      // Busca la billetera del usuario
      const wallet = await Wallet.findOne({ where: { userId } });
  
      if (!wallet) {
        console.log('Billetera no encontrada');
        return res.status(404).json({ success: false, error: 'Billetera no encontrada' });
      }
  
      // Agrega los fondos a la billetera
      wallet.balance += amount;
      await wallet.save();
      console.log('Fondos agregados exitosamente a la billetera');
  
      res.json({ success: true, message: 'Fondos agregados exitosamente a la billetera', saldo_actual: wallet.saldo });
    } catch (error) {
      console.error('Error al agregar fondos a la billetera:', error);
      res.status(500).json({ success: false, error: 'Error al agregar fondos a la billetera' });
    }
  }
  
};
