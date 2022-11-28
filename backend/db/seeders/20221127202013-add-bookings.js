'use strict';
let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}
options.tableName = "Bookings"
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
  
    await queryInterface.bulkInsert(options, [
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
    spotId: 2,
  userId: 2,
startDate: "2024-12-23T00:00:00.000Z",
endDate: "2024-12-24T00:00:00.000Z"
},
    ], {})
  
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete(options, null, {});
  }
};