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
    state: 'Maine',
    country: 'USA',
    lat: 25.3,
    lng: 23.5,
    name: 'Brick cottage',
    description: 'A quaint brick cottage.',
    price: 135.00,
    avgRating: 3.0,
    avgStarRating: 4.1,
    numReviews: 1,
    previewImage: "https://upload.wikimedia.org/wikipedia/commons/2/20/Window_tinting_for_homes.png"

  },
  {
    ownerId: 2,
    address: '110 Amsish Way',
    city: 'NewTown',
    state: 'Pennsylvania',
    country: 'USA',
    lat: 25.2,
    lng: 24.9,
    name: 'cul de sac colonial',
    description: 'A spot so good its number 2!',
    price: 127.00,
    avgRating: 2.3,
avgStarRating: 4.1,
    numReviews: 1,
    previewImage: "https://st2.depositphotos.com/1187194/5187/i/950/depositphotos_51878049-stock-photo-million-dollar-homes.jpg"
  },
  {
    ownerId: 3,
  address: '123 news lifes street',
    city: 'NewTown',
    state: 'Homestate',
    country: 'USA',
    lat: 25.3,
    lng: 23.5,
    name: 'Stone retreat',
    description: 'A beautiful natural stone home.',
    price: 135.00,
    avgRating: 2.2,
    avgStarRating: 4.1,
    numReviews: 1,
    previewImage: "https://s3.amazonaws.com/inarkansas/soiree/homes/img/2020/3939-large.jpg",
   
  
  },
  {
    ownerId: 2,
    address: '110 Amissh Way',
    city: 'NewTown',
    state: 'Pennsylvania',
    country: 'USA',
    lat: 25.2,
    lng: 24.9,
    name: 'cul de sac colonial',
    description: 'A spot so good its number 2!',
    price: 127.00,
    avgRating: 2.3,
avgStarRating: 4.1,
    numReviews: 1,
    previewImage: "https://st2.depositphotos.com/1187194/5187/i/950/depositphotos_51878049-stock-photo-million-dollar-homes.jpg"
  },{
    ownerId: 2,
    address: '110 Amishs Way',
    city: 'NewTown',
    state: 'Pennsylvania',
    country: 'USA',
    lat: 25.2,
    lng: 24.9,
    name: 'cul de sac colonial',
    description: 'A spot so good its number 2!',
    price: 127.00,
    avgRating: 2.3,
avgStarRating: 4.1,
    numReviews: 1,
    previewImage: "https://st2.depositphotos.com/1187194/5187/i/950/depositphotos_51878049-stock-photo-million-dollar-homes.jpg"
  },
  {
    ownerId: 3,
  address: '123 new lisfe street',
    city: 'NewTown',
    state: 'Homestate',
    country: 'USA',
    lat: 25.3,
    lng: 23.5,
    name: 'Stones retreat',
    description: 'A beautiful natural stone home.',
    price: 135.00,
    avgRating: 2.2,
    avgStarRating: 4.1,
    numReviews: 1,
    previewImage: "https://s3.amazonaws.com/inarkansas/soiree/homes/img/2020/3939-large.jpg",
  }, {
    ownerId: 3,
  address: '123 news life street',
    city: 'NewTown',
    state: 'Homestate',
    country: 'USA',
    lat: 25.3,
    lng: 23.5,
    name: 'Stone retreat',
    description: 'A beautiful natural stone home.',
    price: 135.00,
    avgRating: 2.2,
    avgStarRating: 4.1,
    numReviews: 1,
    previewImage: "https://s3.amazonaws.com/inarkansas/soiree/homes/img/2020/3939-large.jpg",
   
  
  },
  {
    
    ownerId: 3,
    address: '1800s Newcasstle Street',
    city: 'NewTown',
    state: 'Maine',
    country: 'USA',
    lat: 25.3,
    lng: 23.5,
    name: 'Brick cottage',
    description: 'A quaint brick cottage.',
    price: 135.00,
    avgRating: 3.0,
    avgStarRating: 4.1,
    numReviews: 1,
    previewImage: "https://upload.wikimedia.org/wikipedia/commons/2/20/Window_tinting_for_homes.png"

  },
   ],{})
  },

  async down (queryInterface, Sequelize) {
 
    await queryInterface.bulkDelete(options, null, {});
  }
};
