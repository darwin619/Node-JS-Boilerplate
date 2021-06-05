const express = require('express');
const router = express.Router();
const validate = require('../../middlewares/validate');
const userValidation = require('../../validations/user.validation');
const userController = require('../../controllers/user.controller');

router.get(
  '/profile',
  validate(userValidation.profile),
  userController.getProfile,
);

module.exports = router;
