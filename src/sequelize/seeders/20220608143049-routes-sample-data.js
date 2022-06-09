'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Routes', [
      {
        id: 1,
        source: 'Uttam Nagar Terminal',
        destination: 'Nehru Place Terminal',
        boardingTime: "2022-06-09T02:35:35.306Z",
        droppingTime: "2022-06-09T03:30:40.306Z",
        createdAt: "2022-06-09T02:51:21.291Z",
        updatedAt: "2022-06-09T02:51:21.291Z"
      },
      {
        id: 2,
        source: 'Uttam Nagar Terminal',
        destination: "Kalkaji Mandir",
        boardingTime: "2022-06-09T02:32:35.306Z",
        droppingTime: "2022-06-09T04:40:37.306Z",
        createdAt: "2022-06-09T02:51:21.291Z",
        updatedAt: "2022-06-09T02:51:21.291Z"
      }

    ], {});

  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Routes', null, {});
  }
};
