const winston = require("winston");
const config = require("config");
const morgan = require("morgan");

module.exports = function (app) {
  // * CHECKING FOR WORKING ENVIRONMENTAL VARIABLES
  if (!config.get("password")) {
    throw new Error("FATAL ERROR: missing environmental variable 'PASSWORD' ");
  }

  if (app.get("env") === "development") {
    winston.info("Username: " + config.get("username"));
    winston.info("Password: " + config.get("password"));
    app.use(morgan("tiny"));
    winston.info("Morgan Enabled");
  }
};
