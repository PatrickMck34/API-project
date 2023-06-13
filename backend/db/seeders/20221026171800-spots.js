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
    previewImage: "https://i.postimg.cc/T20FpRzs/stock1.jpg"
  },
  {
    ownerId: 2,
    address: '123 Main Street',
    city: 'Cityville',
    state: 'CA',
    country: 'USA',
    lat: 34.1,
    lng: -118.2,
    name: 'Cozy Apartment',
    description: 'A cozy apartment in the heart of the city.',
    price: 99.99,
    avgRating: 4.5,
    avgStarRating: 4.9,
    numReviews: 10,
    previewImage: "https://i.postimg.cc/bNdCr1HG/stock2.jpg"
  },
  {
    ownerId: 3,
    address: '456 Oak Avenue',
    city: 'Woodland',
    state: 'NY',
    country: 'USA',
    lat: 40.7,
    lng: -73.9,
    name: 'Rustic Cabin',
    description: 'A rustic cabin surrounded by nature.',
    price: 150.00,
    avgRating: 4.2,
    avgStarRating: 4.3,
    numReviews: 5,
    previewImage: "https://i.postimg.cc/QMgSwmsz/stock3.jpg"
  },
  {
    ownerId: 2,
    address: '123 Main Street',
    city: 'Cityville',
    state: 'CA',
    country: 'USA',
    lat: 37.8,
    lng: -122.4,
    name: 'Cozy Apartment',
    description: 'A cozy apartment in the heart of the city.',
    price: 99.99,
    avgRating: 4.5,
    avgStarRating: 4.8,
    numReviews: 10,
    previewImage: 'https://i.postimg.cc/R0mL7tfL/stock4.jpg'
  },

  {
    ownerId: 3,
    address: '456 Elm Street',
    city: 'Greenville',
    state: 'TX',
    country: 'USA',
    lat: 33.1,
    lng: -96.1,
    name: 'Modern Loft',
    description: 'A stylish and modern loft with open floor plan.',
    price: 200.50,
    avgRating: 4.2,
    avgStarRating: 4.6,
    numReviews: 5,
    previewImage: 'https://i.postimg.cc/bN2x4g9R/stock5.jpg'
  }
   ],{})
  },


  async down (queryInterface, Sequelize) {
 
    await queryInterface.bulkDelete(options, null, {});
  },
  
};

