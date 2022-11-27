'use strict';

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
   await queryInterface.bulkInsert('Spots', [
    {
    id: 1,
    ownerId: 1,
    address: '123 new place street',
    city: 'NewTown',
    state: 'Homestate',
    country: 'US-B',
    lat: 25.3,
    lng: 23.5,
    name: 'spot1',
    description: 'A spot so good its number 1!',
    price: 135.00,
    avgRating: 3.0,
    avgStarRating: 4.1,
    numReviews: 1
  },
  {
    id: 2,
    ownerId: 2,
    address: '123 second place street',
    city: 'NewTown',
    state: 'Homestate',
    country: 'US-B',
    lat: 25.2,
    lng: 24.9,
    name: 'spot2',
    description: 'A spot so good its number 2!',
    price: 127.00,
    avgRating: 2.3,
avgStarRating: 4.1,
    numReviews: 1
  },
  {
    id: 3 ,
    ownerId: 3,
  address: '123 new place street',
    city: 'NewTown',
    state: 'Homestate',
    country: 'US-B',
    lat: 25.3,
    lng: 23.5,
    name: 'spot1',
    description: 'A spot so good its number 1!',
    price: 135.00,
    avgRating: 2.2,
    avgStarRating: 4.1,
    numReviews: 1
  
  },
   ],{})
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('Spots', null, {});
  }
};
