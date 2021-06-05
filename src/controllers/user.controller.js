const userService = require('../services/user.service');
const httpStatus = require('http-status');
const { HttpError } = require('../utils/error');
const { NOT_EXTENDED } = require('http-status');

const getProfile = async (req, res, next) => {
  try {
    const { id } = req.query;
    const user = await userService.profile(id);
    res
      .status(httpStatus.ACCEPTED)
      .json({ message: 'Profile data', data: user });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getProfile,
};

