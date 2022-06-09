'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Subroutes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      routeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {           //subRoutes belongs to Routes 1:1
          model: 'Routes',
          key: 'id'
        }
      },
      stationId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {          //SubRoutes has many Stations 1:n
          model: 'Stations', 
          key: 'id'
        }
      },
      arrivalTime: {
        type: Sequelize.STRING
      },
      departureTime: {
        type: Sequelize.STRING
      },
      stationOrder: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Subroutes');
  }
};