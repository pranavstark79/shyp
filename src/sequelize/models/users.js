'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Users.hasMany(models.Payments, {as: 'payments', foreignKey: 'userId'}, {onDelete: 'cascade'});
      Users.hasMany(models.Bookings, {as: 'bookings', foreignKey: 'userId'}, {onDelete: 'cascade'});
    }
  }
  Users.init({
    name: DataTypes.STRING,
    age: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    address: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};