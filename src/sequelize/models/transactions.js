'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transactions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Transactions.hasMany(models.Payments, {as: 'payments', foreignKey: 'id'}, {onDelete: 'cascade'});
    }
  }
  Transactions.init({
    userId: DataTypes.INTEGER,
    bookingId: DataTypes.INTEGER,
    amount: DataTypes.INTEGER,
    paymentSourceId: DataTypes.INTEGER,
    status: {
      type: DataTypes.ENUM,
      values:['success', 'failed']
    }
  }, {
    sequelize,
    modelName: 'Transactions',
  });
  return Transactions;
};