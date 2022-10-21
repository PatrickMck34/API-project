'use strict';
const bcryptjs = require("bcryptjs");




module.exports = {
  async up (queryInterface, Sequelize) {
      return queryInterface.bulkInsert('Users', [
        {
          email: 'demo@user.io',
          username: 'Demo-lition',
          hashedPassword: bcryptjs.hashSync('password')
        },
        {
          email: 'user1@user.io',
          username: 'FakeUser1',
          hashedPassword: bcryptjs.hashSync('password2')
        },
        {
          email: 'user2@user.io',
          username: 'FakeUser2',
          hashedPassword: bcryptjs.hashSync('password3')
        }
      ], {});
    },
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  

  async down (queryInterface, Sequelize) {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['Demo-lition', 'FakeUser1', 'FakeUser2'] }
    }, {});

    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  