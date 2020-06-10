const statistics = require('../data/statistics.json');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Statistics', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      user_id: {
        type: Sequelize.INTEGER,
      },
      date: {
        type: 'DATE',
      },
      page_views: {
        type: Sequelize.INTEGER,
      },
      clicks: {
        type: Sequelize.INTEGER,
      },
    });

    try {
      await queryInterface.bulkInsert('Statistics', statistics);
    } catch (e) {
      console.log(e);
    }
  },
  down: queryInterface => queryInterface.dropTable('Statistics'),
};
