'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}
options.tableName = "ReviewImages"
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(options, [
      {
         id: 1,
        reviewId: 1,
      url: "1img url",
      },
  {id: 2,
     
    reviewId: 2,
    url: "2",
},
{
  id: 3,
  reviewId: 3,
  url: "3 imgurl",
},
    ], {})
  
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete(options, null, {});
  }
};
