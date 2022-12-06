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
        
      
      url: "1img url",
      },
  {
     
   
    url: "2",
},
{
 

  url: "3 imgurl",
},
    ], {})
  
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete(options, null, {});
  }
};
