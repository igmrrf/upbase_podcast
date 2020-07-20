const winston = require("winston");
const config = require("config");
const morgan = require("morgan");
const path = require("path");

module.exports = function (app) {
  app.set("views", path.join(__dirname, "views"));
  app.set("view enginge", "pug");

  // * CHECKING FOR WORKING ENVIRONMENTAL VARIABLES
  if (!config.get("username")) {
    console.log(config.get("username"));
    throw new Error("FATAL ERROR: missing environmental variable 'PASSWORD' ");
  }

  if (app.get("env") !== "production") {
    winston.info("Username: " + config.get("username"));
    winston.info("Password: " + config.get("password"));
    app.use(morgan("tiny"));
    winston.info("Morgan Enabled");
    console.log("Username: " + config.get("username"));
    console.log("Password: " + config.get("password"));
    console.log("JWT: " + config.get("jwt_secret_key"));
    console.log("Morgan Enabled");
  }
};
