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
    static associate(models) {     //Buses has 1:1 mapping with Routes
      // define association here
      Buses.belongsTo(models.Routes, { foreignKey: 'routeId', key: 'id' });
    }
  }
  Buses.init({
    name: DataTypes.STRING,
    busNumber: DataTypes.STRING,
    description: DataTypes.STRING,
    fare: DataTypes.INTEGER,
    maxSeatsCapacity: DataTypes.INTEGER,
    maxLuggageCapacity: DataTypes.INTEGER,
    availableSeatsCapcity: DataTypes.INTEGER,
    availableLuggageCapacity: DataTypes.INTEGER,
    routeId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Buses',
  });
  return Buses;
};