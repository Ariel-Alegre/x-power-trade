const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Identify = sequelize.define('Identify', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    front: {
      type: DataTypes.STRING,
    },
    back: {
      type: DataTypes.STRING,
    },
 
  });

  return Identify;
};
