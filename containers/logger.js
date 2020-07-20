const winston = require("winston");
require("express-async-errors");

module.exports = function () {
  winston.exceptions.handle(
    new winston.transports.Console({ colorize: true, prettyPrint: true }),
    new winston.transports.File({ filename: "error.log" })
  );

  process.on("unhandledRejection", ex => {
    throw ex;
  });
  winston.createLogger({
    level: "info",
    format: winston.format.json(),
    defaultMeta: { service: "user-service" },
    transports: [
      new winston.transports.File({ filename: "error.log", level: "error" }),
      new winston.transports.File({ filename: "combine.log" })
    ],
    exceptionHandlers: [
      new winston.transports.Console({ colorize: true, prettyPrint: true }),
      new winston.transports.File({ filename: "error.log" })
    ]
  });
  if (process.env.NODE_ENV !== "production") {
    new winston.transports.Console({
      format: winston.format.simple()
    });
  }
};
