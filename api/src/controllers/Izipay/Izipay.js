const { Transaction } = require('../../database/models');
const axios = require('axios');



module.exports = {
  IzipayPayment: async (req, res) => {
    const { amount, currency, source } = req.body;

    try {
      // Realizar una solicitud HTTP a la API de iZiPay para procesar el pago
      const response = await axios.post('URL_DE_LA_API_DE_IZIPAY', {
        amount,
        currency,
        source
      });
  
      // Manejar la respuesta de iZiPay
      const { success, message } = response.data;
  
      if (success) {
        res.json({ message: 'Pago exitoso' });
      } else {
        res.status(500).json({ error: message });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};
