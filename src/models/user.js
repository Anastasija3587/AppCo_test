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
    {
      timestamps: false,
    },
  );
  User.associate = models => {
    User.hasMany(models.Statistic, {foreignKey: 'user_id'});
  };
  return User;
};
