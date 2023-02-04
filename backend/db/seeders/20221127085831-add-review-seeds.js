'use strict';
let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}
options.tableName = "Reviews"

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert(options, [
      {
         
        spotId: 1,
      userId: 1,
    review: "Great place! pretty clean!",
  stars: 3.4},
  {
     
    spotId: 2,
    userId: 1,
  review: "Great place! kinda clean!",
stars: 4
},
{
  
  spotId: 3,
  userId: 1,
review: "Great place! for the most part clean!",
stars: 4
},
    ], {})
  
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete(options, null, {});
  }
};
