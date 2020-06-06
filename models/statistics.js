const statistics = require('../db/statistics.json');

module.exports = (sequelize, DataTypes) => {
  const Statistics = sequelize.define(
    'Statistics',
    {
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        unique: true,
      },
      date: DataTypes.DATE,
      page_views: DataTypes.INTEGER,
      clicks: DataTypes.INTEGER,
    },
    {},
  );
  Statistics.bulkCreate(statistics)
    .then(() => {
      console.log('Connection to database established success');
    })
    .catch(err => {
      console.log('Error', err);
    });
  return Statistics;
};
