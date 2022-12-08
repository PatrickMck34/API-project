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
      startDate: "2024-12-21",
      endDate:"2024-12-22"
      },
      {
        spotId: 2,
      userId: 3,
    startDate: "2024-12-25",
    endDate: "2024-12-26"
    },

  {
    spotId: 2,
  userId: 2,
startDate: "2024-12-23",
endDate: "2024-12-24"
},
    ], {})
  
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete(options, null, {});
  }
};