'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Bookings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      age: {
        type: Sequelize.INTEGER
      },
      gender: {
        type: Sequelize.ENUM,
        values:['male', 'female', 'ud']
      },
      busId: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
          model: 'Buses',
          key: 'id'
        }
      },
      seatNumber: {
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references: {
          model: 'Users',
          key: 'id'
        }
      },
      boardingPoint: {
        type: Sequelize.STRING
      },
      droppingPoint: {
        type: Sequelize.STRING
      },
      fare: {
        type: Sequelize.INTEGER
      },
      bookedBy: {
        type: Sequelize.STRING
      },
      paymentTxId: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
          model: 'Transactions',
          key: 'id'
        }
      },
      isSeatUpdated: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Bookings');
  }
};