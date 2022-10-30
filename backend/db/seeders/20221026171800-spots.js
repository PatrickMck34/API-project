'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
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
  },
  {
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
  }
   ],{})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Spots', null, {});
  }
};
