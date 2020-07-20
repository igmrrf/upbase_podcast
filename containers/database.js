const winston = require("winston");
const mongoose = require("mongoose");
const config = require("config");

mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);
mongoose.set("useUnifiedTopology", true);

module.exports = function () {
  mongoose
    .connect(config.get("url"))
    .then(() => winston.info("Successful Connection to Database"));
};
