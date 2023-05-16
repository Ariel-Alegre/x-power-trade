const { Transaction } = require('../../database/models');
const paypal = require('paypal-rest-sdk');

paypal.configure({
  mode: 'sandbox', // Cambia a 'live' para producción
  client_id: 'ASQgtH93cTc65k9xxluIRsJiPlqXehryX2pm4P1DVTIiJlw3sl7Qm0706mTDvZUtSc1baS4HycERc88g',
  client_secret: 'EIAx1EbWILXmFjaQAQpTVLw8A-yqebzOqitdBifWIc5qsMfpz8jogVJSpYuO0taNWLXT1YfsmR0-kqh4'
});


module.exports = {
  createPayment: async (req, res) => {
    const { amount, currency, description } = req.body;

    const payment = {
      intent: 'sale',
      payer: {
        payment_method: 'paypal'
      },
      redirect_urls: {
        return_url: 'URL_DE_RETORNO',
        cancel_url: 'URL_DE_CANCELACION'
      },
      transactions: [
        {
          amount: {
            total: amount,
            currency
          },
          description
        }
      ]
    };

    paypal.payment.create(payment, async (error, createdPayment) => {
      if (error) {
        console.error(error);
        return res.status(500).send('Error al procesar el pago');
      }

      // Crea una nueva transacción en la base de datos
      try {
        const newTransaction = await Transaction.create({
          amount,
          currency,
          description,
          paymentStatus: 'pending',
          paypalPaymentId: createdPayment.id // Guarda el ID del pago de PayPal en la base de datos
        });

        // Redirige al usuario al enlace de aprobación de PayPal
        const approvalUrl = createdPayment.links.find(link => link.rel === 'approval_url').href;
        res.redirect(approvalUrl);
      } catch (error) {
        console.error(error);
        res.status(500).send('Error al procesar el pago');
      }
    });
  },

  executePayment: async (req, res) => {
    const paymentId = req.query.paymentId;
    const payerId = req.query.PayerID;

    try {
      // Busca la transacción en la base de datos por el ID de pago de PayPal
      const transaction = await Transaction.findOne({ where: { paypalPaymentId: paymentId } });

      if (!transaction) {
        return res.status(404).send('Transacción no encontrada');
      }

      const executePayment = {
        payer_id: payerId
      };

      // Ejecuta el pago en PayPal
      paypal.payment.execute(paymentId, executePayment, async (error, executedPayment) => {
        if (error) {
          console.error(error);
          return res.status(500).send('Error al completar el pago');
        }

        // Actualiza el estado de la transacción en la base de datos
        transaction.paymentStatus = executedPayment.state;
        await transaction.save();

        // Realiza cualquier acción adicional que necesites aquí

        res.send('Pago completado');
      });
    } catch (error) {
      console.error(error);
      res.status(500).send('Error al completar el pago');
    }
  }
};
