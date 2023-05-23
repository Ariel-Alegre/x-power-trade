const { Transaction } = require('../../database/models');
const axios = require('axios');



module.exports = {
  createPayment: async (req, res) => {
    const { nombre, tarjeta, monto } = req.body;

  try {
    // Configurar los datos del pago
    const data = {
      nombre,
      tarjeta,
      monto,
      // Otras propiedades necesarias para la integración con Izipay
    };

    // Realizar la llamada a la API de Izipay para procesar el pago
    const response = await axios.post('https://api.izipay.com/pago', data, {
      headers: {
        Authorization: 'Bearer tu_token_de_acceso' // Reemplazar con tu token de acceso proporcionado por Izipay
      }
    });

    console.log(response);

    // Verificar la respuesta de Izipay y realizar acciones adicionales si es necesario

    res.status(200).json({ mensaje: 'Pago realizado con éxito' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ mensaje: 'Error al procesar el pago' });
  }
  }
};
