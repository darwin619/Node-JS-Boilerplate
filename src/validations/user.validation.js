const Joi = require('joi');

const profile = {
  query: Joi.object().keys({
    id: Joi.number().required(),
  }),
};

module.exports = {
  profile,
};
