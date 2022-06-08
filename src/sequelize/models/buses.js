'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Buses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Buses.init({
    name: DataTypes.STRING,
    desription: DataTypes.STRING,
    maxSeatsCapacity: DataTypes.INTEGER,
    maxLuggageCapacity: DataTypes.INTEGER,
    routeId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Buses',
  });
  return Buses;
};