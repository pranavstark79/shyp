'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Payments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Payments.hasMany(models.Users, {foreignKey: 'userId', as: 'Users'});
      Payments.hasMany(models.Transactions, {foreignKey: 'paymentSourceId', as: 'Transactions'});
    }
  }
  Payments.init({
    userId: DataTypes.INTEGER,
    mode: {
      type: DataTypes.ENUM,
      values: ['creditCard', 'debitCard', 'online']
    },
    cardNumber: DataTypes.STRING,
    expiry: DataTypes.STRING,
    cvv: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Payments',
  });
  return Payments;
};