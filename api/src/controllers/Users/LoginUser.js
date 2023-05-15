require('dotenv').config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User_Register } = require('../../database/models');
const passport = require('passport')






module.exports = {

  LoginUser: async (req, res) => {
    const { email, password } = req.body;

    try {
      // Buscar usuario por email
      const user = await User_Register.findOne({ where: { email } });
      console.log(user);
      

      if (!user) {
        console.log('Usuario no encontrado');
        return res.status(404).json({ message: 'Usuario no encontrado' });
      }

      // Verificar si la contraseña es correcta
      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        console.log('Contraseña incorrecta');
        return res.status(400).json({ message: 'Contraseña incorrecta' });
      }

      // Crear y firmar el token JWT
      const token = jwt.sign({ id: user.id, name: user.name, lastName: user.lastName, email:user.email, phone: user.phone, country: user.country, city: user.city, street:user.street, postal_code: user.postal_code, password: user.password, birthdate: user.birthdate  }, "asfdafsdsdfasdfasdf");

      // Enviar el token JWT en la respuesta
      console.log('Inicio de sesion');
      res.json({token})
     


    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error en el servidor' });
    }
  },

  LoginGoogle: async(req, res) => {
    const { idToken } = req.body;

  try {
 

    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(401).send('Unauthorized');
  }
  }
}

