const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Wallet = sequelize.define('Wallet', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    balance: {
      type: DataTypes.DOUBLE,
    },
    pl_open: {
      type: DataTypes.DOUBLE,
    },
    neto: {
      type: DataTypes.DOUBLE,
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: sequelize.models.User, // Utiliza el modelo User de Sequelize
        key: 'id'
      }
    },
    
    coinId: {
      type: DataTypes.STRING,
    }
  });

  return Wallet;
};
