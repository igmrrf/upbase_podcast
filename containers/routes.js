const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const Podcast = require("../routes/podcast");
const Index = require("../routes");
const Admin = require("../routes/admin");
const User = require("../routes/users");
const Auth_User = require("../routes/user_auth");
const Auth_Admin = require("../routes/admin_auth");
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
  app.use("/api/auth/admin", Auth_Admin);
  app.use("/api/auth/user", Auth_User);
  app.use(error);
};
