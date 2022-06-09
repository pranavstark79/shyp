'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Buses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      busNumber: {
        type: Sequelize.STRING,
        allowNull: false
      },
      description: {
        type: Sequelize.STRING
      },
      fare: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      maxSeatsCapacity: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      availableSeatsCapacity: {
        type: Sequelize.INTEGER
      },
      maxLuggageCapacity: {
        type: Sequelize.INTEGER
      },
      availableSeatsCapacity: {
        type: Sequelize.INTEGER
      },
      routeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {              //Buses belongs to Route 1:1
          model: 'Routes',
          key: 'id'
        }
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
    await queryInterface.dropTable('Buses');
  }
};