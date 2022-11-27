'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Reviews', [
      {
         id: 1,
        spotId: 1,
      userId: 1,
    review: "Great place! very clean!",
  stars: 3.4},
  {id: 2,
     
    spotId: 2,
    userId: 2,
  review: "Great place! very clean!",
stars: 4
},
{
  id: 3,
  spotId: 3,
  userId: 3,
review: "Great place! very clean!",
stars: 4
},
    ], {})
  
  },

  async down (queryInterface, Sequelize) {
  
    await queryInterface.bulkDelete('Reviews', null, {});
  }
};
