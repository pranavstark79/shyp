'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bookings extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Bookings.init({
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    
    gender: {
      type: DataTypes.ENUM,
      values: ['male', 'female', 'ud']
    },
    busId: DataTypes.INTEGER,
    seatNumber: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    boardingPoint: DataTypes.STRING,
    droppingPoint: DataTypes.STRING,
    fare: DataTypes.INTEGER,
    bookedBy: DataTypes.STRING,
    paymentTxId: DataTypes.STRING,
    isSeatUpdated: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Bookings',
  });
  return Bookings;
};