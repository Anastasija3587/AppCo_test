module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('Statistics', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      date: {
        type: Sequelize.DATE,
      },
      page_views: {
        type: Sequelize.INTEGER,
      },
      clicks: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Statistics'),
};
