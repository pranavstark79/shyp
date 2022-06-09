'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Buses', [
      {
          name: "DTC Volvo",
          busNumber: "724",
          description: "Uttam Nagar to Nehru Place",
          maxSeatsCapacity: 60,
          fare: 100,
          availableSeatsCapcity: 60,
          maxLuggageCapacity: 15,
          availableLuggageCapacity: 15,
          routeId: 1,
          createdAt: "2022-06-09T02:40:35.306Z",
          updatedAt: "2022-06-09T02:43:35.306Z"
      },
      {
          name: "DTC Mini",
          busNumber: "724M",
          description: "Uttam Nagar to Nehru Place",
          maxSeatsCapacity: 25,
          fare: 50,
          availableSeatsCapcity: 25,
          maxLuggageCapacity: 10,
          availableLuggageCapacity: 10,
          routeId: 1,
          createdAt: "2022-06-09T02:40:35.306Z",
          updatedAt: "2022-06-09T02:43:35.306Z"
      },
      {
          name: "RTC Mini",
          busNumber: "724R",
          description: "Uttam Nagar to Nehru Place",
          maxSeatsCapacity: 35,
          fare: 80,
          availableSeatsCapcity: 35,
          maxLuggageCapacity: 15,
          availableLuggageCapacity: 15,
          routeId: 2,
          createdAt: "2022-06-09T02:40:35.306Z",
          updatedAt: "2022-06-09T02:43:35.306Z"
      },
  ], {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Buses', null, {});
  }
};
