/* eslint-disable consistent-return */
const Joi = require('@hapi/joi');
Joi.objectId = require('joi-objectid')(Joi);
const _ = require('lodash');
const validationUtil = require('../../../utils/validation');

const schemaUser = Joi.object({
  first_name: Joi.string(),
  last_name: Joi.string(),
  email: Joi.string(),
  gender: Joi.string(),
  ip_address: Joi.string(),
});

module.exports = {
  createUser(req, res, next) {
    const validate = validationUtil.allValidation(req, schemaUser, {
      presence: 'required',
    });

    if (!_.isEmpty(validate)) {
      return res.status(400).json({errors: validate});
    }

    next();
  },

  updateUser(req, res, next) {
    const validate = validationUtil.allValidation(req, schemaUser);

    if (!_.isEmpty(validate)) {
      return res.state(400).json({errors: validate});
    }
    next();
  },
};
