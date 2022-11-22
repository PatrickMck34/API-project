'use strict';
const bcrypt = require("bcryptjs");

module.exports = {
  
  up: async (queryInterface, Sequelize) => {
    options.schema = process.env.NODE_ENV
    options.tableName = 'Users'
    return queryInterface.bulkInsert(options, [
      {
        firstName: "bobd",
        lastName: 'some13',
        email: 'demo@user.io',
        username: 'Demo-lition',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        firstName: "bob",
        lastName: 'some12',
        email: 'user1@user.io',
        username: 'FakeUser1',
        hashedPassword: bcrypt.hashSync('password2')
      },
      {
        firstName: "bobj",
        lastName: 'some1',
        email: 'user2@user.io',
        username: 'FakeUser2',
        hashedPassword: bcrypt.hashSync('password3')
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      username: { [Op.in]: ['Demo-lition', 'FakeUser1', 'FakeUser2'] }
    }, {});
  }
};