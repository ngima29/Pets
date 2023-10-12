'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('targets', 'notified', {
      type: Sequelize.BOOLEAN,
      default: false,
    });
  },
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('targets', 'desire_date', {
      type: Sequelize.STRING,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('targets', 'notified');
    await queryInterface.removeColumn('targets', 'desire_date');
  },
};
