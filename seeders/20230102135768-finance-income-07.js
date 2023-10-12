'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const moment = require('moment');

    // Define the base values for the finance entries
    const baseFinanceEntry = {
      paymentMethod: 'Cash',
      note: 'expense',
      type: 'expense',
      userId: 11,
    };

    // Income category IDs
    const incomeCategoryIds = [1, 2, 3, 4, 5, 6, 7, 8];

    // Initialize the date and timestamp
    const startDate = moment('2023-07-01', 'YYYY-MM-DD');
    const startTimestamp = moment('2023-07-01 23:15:41.459+05:45', 'YYYY-MM-DD HH:mm:ss.SSSZ');

    // Generate and insert the finance entries with sequential date and timestamp
    const randomFinances = [];
    for (let i = 0; i < 30; i++) { // Change to the number of entries you want
      const financeEntry = {
        ...baseFinanceEntry,
        amount: 50+ Math.floor(Math.random()* (450 - 50)),
        date: startDate.format('YYYY-MM-DD'),
        createdAt: startTimestamp.format('YYYY-MM-DD HH:mm:ss.SSSZ'),
        updatedAt: startTimestamp.format('YYYY-MM-DD HH:mm:ss.SSSZ'),
        categoryId: incomeCategoryIds[Math.floor(Math.random() * incomeCategoryIds.length)],
      };

      randomFinances.push(financeEntry);

      // Increment the date and timestamp for the next entry
      startDate.add(1, 'days');
      startTimestamp.add(1, 'days');
    }

    // Insert the data into the 'finances' table
    await queryInterface.bulkInsert('finances', randomFinances, {});

    return;
  },

  down: async (queryInterface, Sequelize) => {
    // Remove the seeded data from the 'finances' table
    await queryInterface.bulkDelete('finances', null, {});

    return;
  },
};
