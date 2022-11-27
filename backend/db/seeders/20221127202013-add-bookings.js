'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Bookings', [
      {
          spotId: 1,
        userId: 1,
      startDate: "2024-12-24T00:00:00.000Z",
      endDate: "2024-12-25T00:00:00.000Z"
      },
      {
        spotId: 2,
      userId: 2,
    startDate: "2024-12-24T00:00:00.000Z",
    endDate: "2024-12-25T00:00:00.000Z"
    },

  {
    spotId: 3,
  userId: 3,
startDate: "2024-12-24T00:00:00.000Z",
endDate: "2024-12-25T00:00:00.000Z"
},
    ], {})
  
  },

  async down (queryInterface, Sequelize) {
  
    await queryInterface.bulkDelete('Bookings', null, {});
  }
};