const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('OperationOpen', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    userId: {
      type: DataTypes.UUID,
    },
    coinId: {
      type: DataTypes.STRING,
    },
    image: {
      type: DataTypes.STRING,
    },
    symbol: {
      type: DataTypes.STRING,
    },
    payAmount: {
      type:  DataTypes.DOUBLE,

    },
    amount: {
      type: DataTypes.DOUBLE,
    },
    pricePurchase: {
      type: DataTypes.DOUBLE,
    },
    priceSale: {
      type: DataTypes.DOUBLE,
    },
  
    pipValue: {
      type: DataTypes.DOUBLE,

    },
    percentage: {
      type: DataTypes.DOUBLE,
    },
  
    expiration_time: {
      type: DataTypes.DATE,
    },
    

    timestamp: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false
    }
  });



};
