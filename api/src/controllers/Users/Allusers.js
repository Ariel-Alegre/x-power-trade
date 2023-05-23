require('dotenv').config();
const bcrypt = require('bcrypt');
const { jwtVerify } = require("jose");
const { User_Register } = require('../../database/models');

module.exports = {

  AllUser: async (req, res) => {

  
    try {
    const allUser = await User_Register.findAll()
    res.status(200).send(allUser)
     

    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error en el servidor' });
    }
  }
}

