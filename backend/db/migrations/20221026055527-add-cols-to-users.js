'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addColumn('Users', 'firstName', {
      type: Sequelize.STRING,
      allowNull: false
    })
    await queryInterface.addColumn('Users', 'lastName', {
      type: Sequelize.STRING,
      allowNull: false
    })
    await queryInterface.addColumn('Spots', 'avgRating', {
      type: Sequelize.DECIMAL,
      
    })
    await queryInterface.addColumn('Spots', 'previewImage', {
      type: Sequelize.STRING,
     
    })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeColumn('Users', 'firstName')
    await queryInterface.removeColumn('Users', 'lastName')
    await queryInterface.removeColumn('Spots', 'avgRating')
    await queryInterface.removeColumn('Spots', 'previewImage')
  }
};
