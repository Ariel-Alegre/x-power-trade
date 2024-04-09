const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Coin', {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },

    image: {
      type: DataTypes.STRING,
    },
    symbol: {
      type: DataTypes.STRING,
    },
    price: {
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
    rating: {
      type: DataTypes.DOUBLE,

    },
    edited_price_purchase: {
      type: DataTypes.DOUBLE,
    },
    edited_price_sale: {
      type: DataTypes.DOUBLE,
    },
    expiration_time: {
      type: DataTypes.DATE,
    },
  });

  // Gancho afterUpdate para actualizar las transacciones asociadas

};
