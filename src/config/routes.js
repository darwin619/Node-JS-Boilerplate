const express = require('express');
const router = express.Router();
const userRoutes = require('../routes/v1/user.route');

const routes = [
  {
    path: '/user',
    route: userRoutes,
  },
];

routes.map((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
