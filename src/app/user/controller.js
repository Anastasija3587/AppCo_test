/* eslint-disable indent */
const models = require('../../models/index');

module.exports = {
  getAll(req, res) {
    models.User.findAll({
      limit: 50,
      offset: (req.query.page - 1) * 50,
      include: [models.Statistic],
    })
      .then(user => res.json(user))
      .catch(err => res.status(404).json(err));
  },
  getById(req, res) {
    const {id} = req.params;
    models.User.findAll({
      where: {id},
      include: [models.Statistic],
      attributes: ['first_name', 'last_name'],
    })
      .then(user => res.json(user))
      .catch(err => res.status(404).json(err));
  },
};
