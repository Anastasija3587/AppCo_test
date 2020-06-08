const models = require('../../models/index');

module.exports = {
  getAll(req, res) {
    models.User.findAll({
      limit: 50,
      offset: (req.query.page - 1) * 50,
      include: [models.Statistic],
    })
      .then(users => res.json(users))
      .catch(err => res.status(404).json(err));
  },
  getById(req, res) {
    // models.User.findById()
  },
};
