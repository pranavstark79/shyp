'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Routes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Routes.hasMany(models.Buses, {as: 'buses', foreignKey: 'routeId'}, {onDelete: 'cascade'});
      Routes.hasMany(models.Subroutes, {foreignKey: 'routeId'});
    }
  }
  Routes.init({
    source: DataTypes.STRING,
    destination: DataTypes.STRING,
    boardingTime: DataTypes.STRING,
    droppingTime: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Routes',
  });
  return Routes;
};