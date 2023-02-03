'use strict';
let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}
options.tableName = "Spots"

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
    
    ownerId: 1,
    address: '1800 Newcasstle Street',
    city: 'NewTown',
    state: 'NC',
    country: 'USA',
    lat: 25.3,
    lng: 23.5,
    name: 'Brick cottage',
    description: 'A quaint brick cottage.',
    price: 135.00,
    avgRating: 3.0,
    avgStarRating: 4.1,
    numReviews: 1,
    previewImage: "https://i.postimg.cc/28twJjzP/swiss-alps.webp"

  },
  {
    ownerId: 2,
    address: '110 Amsish Way',
    city: 'NewTown',
    state: 'NC',
    country: 'USA',
    lat: 25.2,
    lng: 24.9,
    name: 'cul de sac colonial',
    description: 'A spot so good its number 2!',
    price: 127.00,
    avgRating: 2.3,
avgStarRating: 4.1,
    numReviews: 1,
    previewImage: "https://i.postimg.cc/SKfxXsR5/Amalfi-Coast-Italy-jpg.webp"
  },
 
  {
    ownerId: 3,
  address: '123 news life street',
    city: 'NewTown',
    state: 'NC',
    country: 'USA',
    lat: 25.3,
    lng: 23.5,
    name: 'Stone retreat',
    description: 'A beautiful natural stone home.',
    price: 135.00,
    avgRating: 2.2,
    avgStarRating: 4.1,
    numReviews: 1,
    previewImage: "https://i.postimg.cc/SQGqWs67/a-8-wacky-houses-hobbit-home-4x3.webp",
   
  
  },
  {
    
    ownerId: 3,
    address: '1800s Newcasstle Street',
    city: 'NewTown',
    state: 'NC',
    country: 'USA',
    lat: 25.3,
    lng: 23.5,
    name: 'Brick cottage',
    description: 'A quaint brick cottage.',
    price: 135.00,
    avgRating: 3.0,
    avgStarRating: 4.1,
    numReviews: 1,
    previewImage: "https://i.postimg.cc/CK5c5vFf/header-dream-vacation.webp"

  },
   ],{})
  },

  async down (queryInterface, Sequelize) {
 
    await queryInterface.bulkDelete(options, null, {});
  }
};
