const mongoose = require("mongoose");
const chalk = require("../utils/chalk");
const config = require("./config");

const init = (callback) => {
  const { mongoose: { url, options } } = config;
  mongoose.connect(url, options);

  mongoose.connection.on("connected", () => {
    console.log(chalk.connected("Mongoose connected with database => ", url));
    return callback();
  });

  mongoose.connection.on("error", (err) => {
    console.log(
      chalk.error(
        "Mongoose has encountered an error while connecting => " +
          err +
          " error"
      )
    );
  });

  mongoose.connection.on("disconnected", () => {
    console.log(chalk.disconnected("Mongoose connection is disconnected"));
  });

  process.on("SIGINT", () => {
    mongoose.connection.close(() => {
      console.log(
        chalk.termination(
          "Mongoose default connection is disconnected due to application termination"
        )
      );
      process.exit(0);
    });
  });
};

module.exports = {
  init,
};
