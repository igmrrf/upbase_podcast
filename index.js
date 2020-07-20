require("dotenv").config();
const express = require("express");
const winston = require("winston");
const app = express();

require("./containers/logger")();
require("./containers/database")();
require("./containers/routes")(app);
require("./containers/config")(app);

const PORT = process.env.PORT;
if (process.env.NODE_ENV !== "production") {
  console.log(`Server running on port ${PORT}`);
}
app.listen(PORT, () => {
  winston.info(`Server Successfully runnig on port ${PORT}`);
});
