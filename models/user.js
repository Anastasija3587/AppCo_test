const users = require('../db/users.json');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        unique: true,
      },
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      email: DataTypes.STRING,
      gender: DataTypes.STRING,
      ip_address: DataTypes.STRING,
    },
    {},
  );
  User.bulkCreate(users)
    .then(() => {
      console.log('Connection to database established success');
    })
    .catch(err => {
      console.log('Error', err);
    });
  return User;
};
