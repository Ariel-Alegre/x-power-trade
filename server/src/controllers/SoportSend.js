require('dotenv').config();
const nodemailer = require('nodemailer');

// Configuración del transportador de Nodemailer
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465, // Protocolo SSL
    secure: true, // Usar el puerto 465
    auth: {
        user: 'xpowertrade60@gmail.com',
        pass: process.env.PASS,
    },
    tls: {
        rejectUnauthorized: false,
    },
});

module.exports = {
    SoportSend: async (req, res) => {
        const { email, affair, message } = req.body;

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
                        <p style="color: black;">Email: ${email}</p>
                        <p style="color: black;">Asunto: ${affair}</p>
                        <p style="color: black;">Mensaje: ${message}</p>
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
                        <p style="color: black;">Estimado/a,</p>
                        <p style="color: black;">Hemos recibido su consulta con el asunto: <strong>${affair}</strong>.</p>
                        <p style="color: black;">Nuestro equipo de soporte de X Power Trade revisará su mensaje y se pondrá en contacto con usted lo antes posible.</p>
                        <p style="color: black;">Mensaje recibido:</p>
                        <blockquote style="border-left: 2px solid #1976d2; padding-left: 1em;">
                            <p style="color: black;">${message}</p>
                        </blockquote>
                        <p style="color: black;">Agradecemos su paciencia y comprensión.</p>
                        <p style="color: black;">Atentamente,</p>
                        <p style="color: black;">El equipo de X Power Trade</p>
                    </div>
                </body>
                </html>
            `;

            // Envío del correo al soporte
            const send = await transporter.sendMail({
                from: 'xpowertrade60@gmail.com',
                to: 'xpowertrade60@gmail.com',
                subject: affair || 'Consulta de soporte', // Usa el asunto del mensaje o uno por defecto
                html: emailContent,
            });

            // Envío del correo al usuario
            const sendUser = await transporter.sendMail({
                from: 'xpowertrade60@gmail.com',
                to: email,
                subject: 'Consulta de soporte', // Asunto para el usuario
                html: emailContentUser,
            });

            // Comprobación del resultado del envío
            if (send && sendUser) {
                console.log('Correo enviado correctamente a soporte y al usuario');
                res.status(200).send({ success: true, message: 'Correo enviado correctamente' });
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
