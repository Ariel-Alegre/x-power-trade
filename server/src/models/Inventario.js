const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Inventario', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    Prices: {
      type: DataTypes.INTEGER,
    },
    Availability: {
      type: DataTypes.STRING
    },
     Proyects: {
      type: DataTypes.STRING
    },
    Specifications: {
      type: DataTypes.STRING
    },


  }, );
};
