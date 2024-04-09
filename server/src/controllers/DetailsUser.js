const { User } = require('../db');
require('dotenv').config();

module.exports = {
    DetailsUser: async (req, res) => {
        const {userId} = req.params

    try {
      const user = await User.findByPk(userId)
      console.log("Detalles del usuario");
      res.status(200).send(user)

    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error en el servidor' });
    }
  },
};
