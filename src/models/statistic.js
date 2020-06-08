module.exports = (sequelize, DataTypes) => {
  const Statistic = sequelize.define(
    'Statistic',
    {
      user_id: DataTypes.INTEGER,
      date: DataTypes.DATE,
      page_views: DataTypes.INTEGER,
      clicks: DataTypes.INTEGER,
    },
    {
      timestamps: false,
    },
  );
  Statistic.associate = models => {
    Statistic.belongsTo(models.User, {foreignKey: 'user_id'});
  };
  return Statistic;
};
