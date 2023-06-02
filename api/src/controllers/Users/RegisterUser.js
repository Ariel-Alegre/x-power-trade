const { User_Register } = require('../../database/models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const algorithm = 'aes-192-cbc';
const key = '111111111111111111111111' // hard code
const iv = '2222222222222222' // Vector de inicialización aleatorio (16 bytes)

function encryptToken(token) {
  const cipher = crypto.createCipheriv(algorithm, key, iv);
  let encryptedToken = cipher.update(token, 'utf8', 'hex');
  encryptedToken += cipher.final('hex');
  return encryptedToken;
}

function decryptToken(encryptedToken) {
  const decipher = crypto.createDecipheriv(algorithm, key, iv);
  let decryptedToken = decipher.update(encryptedToken, 'hex', 'utf8');
  decryptedToken += decipher.final('utf8');
  return decryptedToken;
}

module.exports = {
  RegisterUser: async (req, res) => {
    const { name, lastName, password, email, phone, country, city, postal_code, birthdate, street } = req.body

    try {
      // Verificar si el usuario ya existe
      const user = await User_Register.findOne({ where: { email } });

      if (user) {
        console.log('El usuario ya existe');
        return res.status(400).json({ message: 'El usuario ya existe' });
      }

      // Crear hash de la contraseña
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      // Crear el usuario
      const newUser = await User_Register.create({
        name,
        lastName,
        email,
        password: hashedPassword,
        phone,
        country,
        city, 
        postal_code,
        birthdate,
        street
      });

      // Crear y firmar el token JWT
      const token = jwt.sign({ id: newUser.id }, "asfdafsdsdfasdfasdf");
      const encrypt = encryptToken(token)

      // Enviar el token JWT en la respuesta
      console.log('Creado correctamente');
      return res.json({token: encrypt });


    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error en el servidor' });
    }

  }
}