const winston = require("winston");
const mongoose = require("mongoose");

mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);
mongoose.set("useUnifiedTopology", true);

module.exports = function () {
  mongoose
    .connect(
      "mongodb+srv://lazy:devsensei@tests.jmazr.mongodb.net/<dbname>?retryWrites=true&w=majority"
    )
    .then(() => winston.info("Successful Connection to Database"));
};
