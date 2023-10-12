'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('transactions', 'payment_date', {
      type: Sequelize.STRING,
      allowNull: true,
    });
  },
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('transactions', 'notified', {
      type: Sequelize.BOOLEAN,
      default: false,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('transactions', 'payment_date');
    await queryInterface.removeColumn('transactions', 'notified');
  },
};
