require("dotenv").config();
const express = require("express");
const winston = require("winston");
const app = express();

require("../containers/logging")();
require("../containers/database")();
require("../containers/routes")(app);
require("../containers/config")(app);
require("../containers/validate")();

const PORT = process.env.PORT;
app.listen(PORT, () => {
  winston.info(`Server Successfully runnig on port ${PORT}`);
});
