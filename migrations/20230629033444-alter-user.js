'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('users', 'device_token', {
      type: Sequelize.STRING,
      allowNull: true,
    });
  },


  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('users', 'device_token');
  },
};
