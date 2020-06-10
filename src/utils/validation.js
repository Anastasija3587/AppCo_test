/* eslint-disable no-restricted-syntax */
module.exports = {
  getMessages(validation) {
    if (!validation.error) {
      return false;
    }

    const allMessage = [];

    for (const detail of validation.error.details) {
      allMessage.push(detail.message);
    }

    return allMessage;
  },

  validation(req, schema, optional = {}) {
    const validation = schema.validate(req.body, {
      abortEarly: false,
      ...optional,
    });

    const errorMessages = this.getMessages(validation);
    if (errorMessages) {
      return errorMessages;
    }

    req.body = validation.value;
    return errorMessages;
  },
};
