'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('ReviewImages', [
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
  
    await queryInterface.bulkDelete('ReviewImages', null, {});
  }
};
