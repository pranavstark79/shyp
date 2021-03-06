'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Stations extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Stations.hasMany(models.Subroutes, {foreignKey: 'stationId', as: 'stations'});
    }
  }
  Stations.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Stations',
  });
  return Stations;
};