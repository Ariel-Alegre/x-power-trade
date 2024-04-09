require('dotenv').config();
const { User, Wallet } = require('../db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');

// Configura el transporte SMTP
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'arielalegre98@gmail.com',
    pass: process.env.PASS,
  },
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

      const newUser = await User.create({
        name,
        lastName,
        email,
        password: hashedPassword,
        phone,
        role,
        backgroundColor,
      });

      await Wallet.create({
        balance: 0,
        userId: newUser.id,
      });

      const tokenPayload = { id: newUser.id, role: newUser.role };
      const token = jwt.sign(tokenPayload, process.env.FIRMA_TOKEN);

      const emailContent = `
      <html>
      <body style="text-align: center;  background: rgb(253, 251, 251); padding: 2em">
        <div style="display: inline-block; text-align: left; padding: 1em; background: white;  width: 90%" >
          <div style="margin: 0 auto; text-align: center;">
            <img src="https://trading-ten-nu.vercel.app/static/media/logo-1.c882b769890698e88e7d.png" alt="Logo de la empresa" style="display: block; max-width: 150px; margin: 0 auto;">
          </div>
    
          <p style="color: black;">Estimado/a ${name} ${lastName},</p>
          <p style="color: black;">Estamos encantados de confirmar de su Cuenta X POWER TRADE está creada que ahora puede comenzar su próspero viaje comercial con X POWER TRADE utilizando sus credenciales de Cuenta X POWER TRADE a continuación</p>
          <p style="color: black;">Email: ${email} </p>
          <p style="color: black;">Contraseña: ${password} </p>
          <p style="color: black;">Moneda: USD </p>
          <p><strong>*Para proteger su cuenta, no comparta sus credenciales con nadie.</strong></p>
          <p>¡Agregar fondos a su cuenta nunca ha sido tan facil ¡Haga click en el botón de abajo e inicie sesión! </p>
          <p><button style="padding: 1em;  background: rgb(0, 172, 240); color: white; cursor: pointer;margin: 0 auto; text-align: center;">¡INICIAR SESIÓN!</button></p>
          
    
       
        </div>
      </body>
    </html>
      `;

      await transporter.sendMail({
        from: 'arielalegre98@gmail.com',
        to: email,
        subject: '¡Bienvenido a nuestra plataforma!',
        html: emailContent,
      });

      console.log('Usuario creado correctamente');
      return res.json({ token });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Error en el servidor' });
    }
  },
};
