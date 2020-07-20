const winston = require("winston");
const config = require("config");
const morgan = require("morgan");
const path = require("path");

module.exports = function (app) {
  // * CHECKING FOR WORKING ENVIRONMENTAL VARIABLES
  if (!config.get("username")) {

    throw new Error("FATAL ERROR: missing environmental variable 'PASSWORD' ");
  }

  if (app.get("env") !== "production") {
    winston.info("Username: " + config.get("username"));
    winston.info("Password: " + config.get("password"));
    app.use(morgan("tiny"));
    winston.info("Morgan Enabled");
  }
};
