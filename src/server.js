const app = require('./app');
const config = require('./config/config');
const mongoClient = require('./config/mongoose');
const chalk = require('./utils/chalk');

//Configure server to listen on the specified port
mongoClient.init(() => {
  app.listen(config.port, () => {
    console.log(
      chalk.info(
        `Server started on port ${config.port} in ${process.env.NODE_ENV} mode`,
      ),
    );
  });
});

const graceful = (msg) => {
  console.log(
    chalk.disconnected('Node Server Disconnected Through =>' + ' ' + msg),
  );
  process.exit(0);
};

//For app restart
process.once('SIGUSR2', () => {
  graceful('App Restart');
});

//For app termination
process.on('SIGINT', () => {
  graceful('App Termination');
});

//For production app termination
process.on('SIGTERM', () => {
  graceful('Server App Termination');
});
