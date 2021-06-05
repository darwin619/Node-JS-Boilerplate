const chalk = require('chalk');

module.exports = {
  successful: chalk.bold.blue,
  info: chalk.bold.green,
  connected: chalk.bold.cyan,
  error: chalk.bold.yellow,
  disconnected: chalk.bold.red,
  termination: chalk.bold.magenta,
};

