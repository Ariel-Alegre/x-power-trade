require('dotenv').config();
const { User, Wallet } = require('../db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');

// Configura el transporte SMTP
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465, // Protocolo SSL
  secure: true, // Usar el puerto 465
  auth: {
    user: 'xpowertrade60@gmail.com',
    pass: process.env.PASS, // Asegúrate de que la variable PASS esté definida en tu archivo .env
  },
  tls: {
    rejectUnauthorized: false,
  },
});

// Función para generar un código de transacción de 4 dígitos
const generateTransactionCode = () => {
  return Math.floor(1000 + Math.random() * 9000); // Genera un número entre 1000 y 9999
};

module.exports = {
  Withdraw: async (req, res) => {
    const { name, lastName, email, amount, ruc, accountNumber } = req.body;

    try {

      const emailContent = `
      <html>
      <body style="
          background-color: #f3f3f3;
          display: grid;
          justify-content: center;
          max-width: 100%;
      ">
          <div style="
              background-color: #fff;
              border: 8px solid #1976d2;
              padding: 2em;
              width: 600px;
              max-width: 100%;
              margin: 0 auto;
              font-family: Arial, Helvetica, sans-serif;
          ">
              <div style="margin: 0 auto; text-align: center;">
                  <img src="https://xpowerlatam.com/static/media/logo-1.c882b769890698e88e7d.png" alt="Logo de la empresa" style="display: block; max-width: 150px; margin: 0 auto;">
              </div>
              <p style="color: black;">Nombre: ${name} ${lastName},</p>
              <p style="color: black;">Email: ${email}</p>
              <p style="color: black;">Quiero retirar: $${amount}</p>
              <p style="color: black;">Mi RUC: ${ruc}</p>
          </div>
      </body>
      </html>
      `;

      const emailContentUser = `
      <html>
      <body style="
          background-color: #f3f3f3;
          display: grid;
          justify-content: center;
          max-width: 100%;
      ">
          <div style="
              background-color: #fff;
              border: 8px solid #1976d2;
              padding: 2em;
              width: 600px;
              max-width: 100%;
              margin: 0 auto;
              font-family: Arial, Helvetica, sans-serif;
          ">
              <div style="margin: 0 auto; text-align: center;">
                  <img src="https://xpowerlatam.com/static/media/logo-1.c882b769890698e88e7d.png" alt="Logo de la empresa" style="display: block; max-width: 150px; margin: 0 auto;">
              </div>
              <p style="color: black;">Estimado/a, ${name} ${lastName}</p>
              <p style="color: black;"><strong>Número de cuenta:${accountNumber}</strong></p>
              <p style="color: black;">Hemos recibido su solicitud de retiro por un monto de <strong>$${amount}</strong>.</p>
              <p style="color: black;">Nuestro equipo de X Power Trade revisará su solicitud y se pondrá en contacto con usted lo antes posible.</p>
              <p style="color: black;">Agradecemos su paciencia y comprensión.</p>
              <p style="color: black;">Atentamente,</p>
              <p style="color: black;">El equipo de X Power Trade</p>
          </div>
      </body>
      </html>
      `;

      // Envío del correo a soporte
      const send = await transporter.sendMail({
        from: 'soporte@xpowertrade.com',
        to: 'soporte@xpowertrade.com',
        subject: '¡Requiero realizar un retiro!',
        html: emailContent,
      });

      // Envío del correo al usuario
      const sendUser = await transporter.sendMail({
        from: 'xpowertrade60@gmail.com',
        to: email,
        subject: 'Confirmación de Solicitud de Retiro', // Asunto para el usuario
        html: emailContentUser,
      });

      // Comprobación del resultado del envío
      if (send && sendUser) {
        console.log('Correo de petición enviado correctamente a soporte y al usuario');
        res.status(200).send({ success: true, message: 'Correo de petición enviado correctamente a soporte y al usuario' });
      } else {
        console.log('Error al enviar el email');
        res.status(404).send({ success: false, message: 'Error al enviar el email' });
      }
    } catch (error) {
      console.error('Error en el envío de correo:', error);
      res.status(500).json({ message: 'Error en el servidor' });
    }
  },
};
