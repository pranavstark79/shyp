'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Subroutes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Subroutes.hasMany(models.Stations, {as: 'stations'});
      Subroutes.belongsTo(models.Routes, {foreignKey: 'routeId'})
    }
  }
  Subroutes.init({
    routeId: DataTypes.INTEGER,
    stationId: DataTypes.INTEGER,
    arrivalTime: DataTypes.STRING,
    departureTime: DataTypes.STRING,
    stationOrder: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Subroutes',
  });
  return Subroutes;
};