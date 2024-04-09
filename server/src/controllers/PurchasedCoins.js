require('dotenv').config();
const jwt = require('jsonwebtoken');
const { Wallet, OperationOpen } = require('../db');

module.exports = {
    PurchasedCoins: async (req, res) => {
    const { authorization } = req.headers;

    if (!authorization) return res.sendStatus(401);

    try {
      // Verificar el token JWT
      const payload = jwt.verify(authorization, process.env.FIRMA_TOKEN);

      // Obtener todos los datos del usuario desde la base de datos
      const operationOpen = await OperationOpen.findAll({ 
        where: { userId: payload.id }, // Corregido a 'userId' en lugar de 'id'
      });

      // Si la billetera no se encuentra
      if (!operationOpen) {
        console.log('Monedas no encontrada');
        return res.status(404).json({ message: 'Monedas no encontrada' });
      }

      // Enviar todos los datos del usuario como respuesta
      return res.status(200).json(operationOpen); // Enviar los datos de la billetera como JSON
    } catch (error) {
      console.error('Error: el wallet personal', error);
      return res.status(500).json({ message: 'Error en el servidor' });
    }
  }
};
