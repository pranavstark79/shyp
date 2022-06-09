'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Subroutes', [
      {
        routeId: 1,
        stationId: 1,
        arrivalTime: "2022-06-09T02:35:35.306Z",
        departureTime: "2022-06-09T02:40:35.306Z",
        stationOrder: 1,
        createdAt: "2022-06-09T02:51:21.291Z",
        updatedAt: "2022-06-09T02:51:21.291Z"
      },
      {
        routeId: 1,
        stationId: 2,
        arrivalTime: "2022-06-09T02:55:35.306Z",
        departureTime: "2022-06-09T02:56:35.306Z",
        stationOrder: 2,
        createdAt: "2022-06-09T02:51:21.291Z",
        updatedAt: "2022-06-09T02:51:21.291Z"
      },
      {
        routeId: 1,
        stationId: 3,
        arrivalTime: "2022-06-09T03:35:35.306Z",
        departureTime: "2022-06-09T03:40:35.306Z",
        stationOrder: 3,
        createdAt: "2022-06-09T02:51:21.291Z",
        updatedAt: "2022-06-09T02:51:21.291Z"
      },
      {
        routeId: 1,
        stationId: 4,
        arrivalTime: "2022-06-09T03:55:35.306Z",
        departureTime: "2022-06-09T04:01:35.306Z",
        stationOrder: 4,
        createdAt: "2022-06-09T02:51:21.291Z",
        updatedAt: "2022-06-09T02:51:21.291Z"
      },
      {
        routeId: 1,
        stationId: 4,
        arrivalTime: "2022-06-09T04:55:35.306Z",
        departureTime: "2022-06-09T05:00:35.306Z",
        stationOrder: 4,
        createdAt: "2022-06-09T02:51:21.291Z",
        updatedAt: "2022-06-09T02:51:21.291Z"
      },
      {
        routeId: 1,
        stationId: 4,
        arrivalTime: "2022-06-09T05:20:35.306Z",
        departureTime: "2022-06-09T05:30:35.306Z",
        stationOrder: 4,
        createdAt: "2022-06-09T02:51:21.291Z",
        updatedAt: "2022-06-09T02:51:21.291Z"
      },
      {
        routeId: 1,
        stationId: 4,
        arrivalTime: "2022-06-09T05:45:35.306Z",
        departureTime: "2022-06-09T06:00:35.306Z",
        stationOrder: 4,
        createdAt: "2022-06-09T02:51:21.291Z",
        updatedAt: "2022-06-09T02:51:21.291Z"
      }
    ], {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Subroutes', null, {});
  }
};
