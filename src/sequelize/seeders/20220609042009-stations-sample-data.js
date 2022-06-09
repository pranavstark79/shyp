'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Stations', [
      {
        name: "Uttam Nagar Terminal",
        createdAt: "2022-06-09T02:51:21.291Z",
        updatedAt: "2022-06-09T02:51:21.291Z"
      },
      {
        name: "D.E.S.U. Colony Janak Puri",
        createdAt: "2022-06-09T02:51:21.291Z",
        updatedAt: "2022-06-09T02:51:21.291Z"
      },
      {
        name: "Lajwanti Garden",
        createdAt: "2022-06-09T02:51:21.291Z",
        updatedAt: "2022-06-09T02:51:21.291Z"
      },
      {
        name: "Kirby Place",
        createdAt: "2022-06-09T02:51:21.291Z",
        updatedAt: "2022-06-09T02:51:21.291Z"
      },
      {
        name: "Signal Officer Flats",
        createdAt: "2022-06-09T02:51:21.291Z",
        updatedAt: "2022-06-09T02:51:21.291Z"
      },
      {
        name: "R.R. Lines",
        createdAt: "2022-06-09T02:51:21.291Z",
        updatedAt: "2022-06-09T02:51:21.291Z"
      },
      {
        name: "Dhaula Kuan",
        createdAt: "2022-06-09T02:51:21.291Z",
        updatedAt: "2022-06-09T02:51:21.291Z"
      },
      {
        name: "Moti Bagh",
        createdAt: "2022-06-09T02:51:21.291Z",
        updatedAt: "2022-06-09T02:51:21.291Z"
      },
      {
        name: "A.I.I.M.S.",
        createdAt: "2022-06-09T02:51:21.291Z",
        updatedAt: "2022-06-09T02:51:21.291Z"
      },
      {
        name: "Andrews Ganj",
        createdAt: "2022-06-09T02:51:21.291Z",
        updatedAt: "2022-06-09T02:51:21.291Z"
      },
      {
        name: "Sant Nagar",
        createdAt: "2022-06-09T02:51:21.291Z",
        updatedAt: "2022-06-09T02:51:21.291Z"
      },
      {
        name: "East of Kailash",
        createdAt: "2022-06-09T02:51:21.291Z",
        updatedAt: "2022-06-09T02:51:21.291Z"
      },
      {
        name: "Nehru Place",
        createdAt: "2022-06-09T02:51:21.291Z",
        updatedAt: "2022-06-09T02:51:21.291Z"
      }
    ], {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Stations', null, {});
  }
};
