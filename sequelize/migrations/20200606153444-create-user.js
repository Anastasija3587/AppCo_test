const users = require('../data/users.json');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      first_name: {
        type: Sequelize.STRING,
      },
      last_name: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      gender: {
        type: Sequelize.STRING,
      },
      ip_address: {
        type: Sequelize.STRING,
      },
    });

    try {
      await queryInterface.bulkInsert('Users', users);
    } catch (e) {
      console.log(e);
    }
  },
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Users'),
};
