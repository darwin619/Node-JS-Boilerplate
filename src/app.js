const express = require('express');
const cors = require('cors');
const compression = require('compression');
const helmet = require('helmet');
const morgan = require('morgan');
const routes = require('./config/routes');
const { handleError } = require('./utils/error.js');

//Initialize express server
const app = express();

//Parse json request body
app.use(express.json());

//Parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

//Enable cors for the backend
app.use(cors());

//Enable gzip compression of body in response
app.use(compression());

//Enable sending important security headers in response
app.use(helmet());

//Enable morgan to display api status in terminal
app.use(morgan('dev'));

//Connect all our api routes to the server
app.use('/api/v1', routes);

//Middleware to handle api errors
app.use((err, req, res, next) => {
  handleError(err, res);
});

//Response for backend parent route (/)
app.get('/', (req, res) => {
  res.status(200).json({ message: 'This server is here for your service!' });
});

//The 404 Route
app.get('*', (req, res) => {
  res.send('No such route exists in the server!', 404);
});

module.exports = app;
