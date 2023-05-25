const axios = require('axios');
const nodemailer = require('nodemailer')
const { User_Register } =require('../../database/models')

module.exports = {
    SendEmail: async (req, res) => {
        const {email, subject, text } = req.body;

     


        try {

            const config = {
                host: "smtp.gmail.com",
                port: 465,
                secure: true,
                auth: {
                  user: "arielalegre98@gmail.com",
                  pass: "ncpsszdlnispfzly"
                },
                tls: {
                  // do not fail on invalid certs
                  rejectUnauthorized: false,
                },
              }
              
            
              const mensaje = {
                from: "",
                to : "arielapple98@gmail.com",
                subject,
                text,
              }
              const transport = nodemailer.createTransport(config);
              transport.verify(function (error, success) {
                if (error) {
                  console.log(error);
                } else {
                  console.log("Server is ready to take our messages");
                }
              });
            
              const info = await transport.sendMail(mensaje)
            
              res.status(200).send('Correo enviado correctamente');
            
        } catch (error) {
            console.error(error);
            return res.status(500).json({ mensaje: 'Error en el servidor no se pudo enviar el mensaje' });
        }
            
    }

}