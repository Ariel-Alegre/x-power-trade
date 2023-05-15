require('dotenv').config();
const { User_Register } = require('../../database/models');

module.exports = {

  AllUsers: async (req, res) => {
    try {
    const allUsers = await User_Register.findAll()

    res.status(200).send(allUsers)

    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error en el servidor' });
    }
  }
}

