'use strict';
const bcrypt = require("bcryptjs");




module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('Users', [
        {
          firstName: 'bob',
          lastName: 'bobLast',
          email: 'demo@user.io',
          username: 'Demo-lition',
          hashedPassword: bcrypt.hashSync('password')
        },
        {
          firstName: 'bob1',
          lastName: 'bobLast1',
          email: 'user1@user.io',
          username: 'FakeUser1',
          hashedPassword: bcrypt.hashSync('password2')
        },
        {
          firstName: 'bob2',
          lastName: 'bobLast2',
          email: 'user2@user.io',
          username: 'FakeUser2',
          hashedPassword: bcrypt.hashSync('password3')
        }
      ],{})

  //     return queryInterface.bulkInsert('Spots', [
  //       {
  //         ownerId: 1,
  //         address: '123 new place street',
  //         city: 'NewTown',
  //         state: 'Homestate',
  //         country: 'USB',
  //         lat: 25.3,
  //         lng: 23.5,
  //         name: 'spot1',
  //         description: 'A spot so good its number 1!',
  //         price: 135.00,
      
  //       }
  //     ],{})
  },
  
  

  async down (queryInterface, Sequelize) {
    const Op = Sequelize.Op;
    await queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['Demo-lition', 'FakeUser1', 'FakeUser2'] }
    }, {});
    // return queryInterface.bulkDelete('Spots', {
    //   name: {[Op.in]: ['spot1']}, });
  
  }}