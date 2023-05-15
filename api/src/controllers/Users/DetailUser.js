require('dotenv').config();
const bcrypt = require('bcrypt');
const { jwtVerify } = require("jose");
const { User_Register } = require('../../database/models');

module.exports = {

  DetailUser: async (req, res) => {
    const { authorization } = req.headers;

    if (!authorization) return res.sendStatus(401);
  
    try {
      const encoder = new TextEncoder();
      const { payload } = await jwtVerify(
        authorization,
        encoder.encode('asfdafsdsdfasdfasdf')
      );
      
   /*    const user = await User_Register.forEach((user) => user.id === payload.id) */
  
    /*   if (!user) return res.sendStatus(401);
  
      delete user.password; */
  
      return res.send(payload);
     

    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error en el servidor' });
    }
  }
}

