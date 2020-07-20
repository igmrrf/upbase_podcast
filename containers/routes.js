const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const Podcast = require("../routes/podcast");
const Admin = require("../routes/admin");
const User = require("../routes/users");
const Auth = require("../routes/auth");
const error = require("../middleware/error");

module.exports = function (app) {
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(cors());
  app.use(express.static("public"));
  app.use("/", Index);
  app.use("/api/podcasts", Podcast);
  app.use("/api/admin", Admin);
  app.use("/api/users", User);
  app.use("/api/auth", Auth);
  app.use(error);
};
