'use strict';
let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}
options.tableName = "Trees"

/** @type {import('sequelize-cli').Migration} */
module.exports = {

  async up (queryInterface, Sequelize) {
    
    // options.schema = process.env.NODE_ENV
    // options.tableName = 'Spots'
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert(options, [
    {
    number: 44,
    location: "South America",
    forSurvivor: true,
    message: "blah blah",

  }
   ],{})
  },


  async down (queryInterface, Sequelize) {
 
    await queryInterface.bulkDelete(options, null, {});
  },
  
};

