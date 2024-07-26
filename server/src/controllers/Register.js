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
    pass: process.env.PASS,
  },
  socketTimeout: 15000,
  tls: {
    rejectUnauthorized: false,
  },
}); 

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function generateAccountNumber() {
  let accountNumber = '';
  for (let i = 0; i < 22; i++) {
    accountNumber += Math.floor(Math.random() * 10); // Agrega un dígito aleatorio del 0 al 9
  }
  return accountNumber; // Retorna el número de cuenta de 22 dígitos
}

module.exports = {
  Register: async (req, res) => {
    const { name, lastName, email, password, phone } = req.body;

    try {
      if (!name || !lastName || !email || !password || !phone) {
        return res.status(400).json({ message: 'Todos los campos son obligatorios' });
      }

      const existingUser = await User.findOne({ where: { email } });

      if (existingUser) {
        console.log('El usuario ya existe');
        return res.status(400).json({ message: 'El usuario ya existe' });
      } 

      if (password.length > 50) {
        return res.status(400).json({ message: 'La contraseña es demasiado larga' });
      }

      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(password, saltRounds);

      const role = ['admin1@gmail.com', 'admin2@fmail.com'].includes(email) ? 'admin' : 'user';

      const backgroundColor = getRandomColor(); // Genera un color aleatorio
      const accountNumber = generateAccountNumber(); // Genera el número de cuenta

  const emailContent = `
      <html>
      <body style="text-align: center;  background: rgb(253, 251, 251); padding: 2em">
        <div style="display: inline-block; text-align: left; padding: 1em; background: white;  width: 90%" >
          <div style="margin: 0 auto; text-align: center;">
            <img src="https://trading-ten-nu.vercel.app/static/media/logo-1.c882b769890698e88e7d.png" alt="Logo de la empresa" style="display: block; max-width: 150px; margin: 0 auto;">
          </div>
    
          <p style="color: black;">Estimado/a ${name} ${lastName},</p>
          <p style="color: black;">Estamos encantados de confirmar que su Cuenta X POWER TRADE está creada y ahora puede comenzar su próspero viaje comercial con X POWER TRADE utilizando sus credenciales de Cuenta X POWER TRADE a continuación</p>
          <p style="color: black;">Email: ${email} </p>
          <p style="color: black;">Contraseña: ${password} </p>
          <p style="color: black;">Número de cuenta: ${accountNumber} </p> <!-- Número de cuenta agregado -->
          <p style="color: black;">Moneda: USD </p>
          <p><strong>*Para proteger su cuenta, no comparta sus credenciales con nadie.</strong></p>
          <p>¡Agregar fondos a su cuenta nunca ha sido tan fácil! ¡Haga clic en el botón de abajo e inicie sesión!</p>
          <p><a href="https://xpowertrade.com/auth/login"><button style="padding: 1em;  background: rgb(0, 172, 240); color: white; cursor: pointer;margin: 0 auto; text-align: center;">¡INICIAR SESIÓN!</button></a></p>
        </div>
      </body>
    </html>
      `;

  const send =  await transporter.sendMail({
        from: 'soporte@xpowertrade.com',
        to: email,
        subject: '¡Bienvenido a nuestra plataforma!',
        html: emailContent,
      }); 
  

      if (send) {
        console.log('Email enviado');
      } else {
        console.log('Error al enviar email');
        
      } 
      const newUser = await User.create({
        name,
        lastName,
        email,
        password/* : hashedPassword */, // Almacena la contraseña hasheada
        phone,
        role,
        backgroundColor,
        accountNumber, // Agrega el número de cuenta al usuario
      });

      await Wallet.create({
        balance: 0,
        userId: newUser.id,
      });

      const tokenPayload = { id: newUser.id, role: newUser.role };
      const token = jwt.sign(tokenPayload, process.env.FIRMA_TOKEN);

      console.log('Usuario creado correctamente');
      return res.json({ token });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error en el servidor' });
    }
  },
};
