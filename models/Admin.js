const mongoose = require("mongoose");
const joi = require("@hapi/joi");
const config = require("config");
const jwt = require("jsonwebtoken");

const adminSchema = new mongoose.Schema({
  username: {
    type: String,
    default: "",
    min: 5,
    max: 50,
    required: true,
    trim: true,
    lowercase: true
  },

  email: {
    type: String,
    default: "",
    min: 5,
    max: 100,
    required: true,
    trim: true,
    lowercase: true,
    unique: true
  },
  password: {
    type: String,
    default: "",
    min: 5,
    max: 1024,
    required: true
  },
  isAdmin: {
    type: Boolean,
    default: false
  }
});

userSchema.methods.generateAuthToken = function () {
  return jwt.sign(
    { _id: this._id, isAdmin: this.isAdmin },
    config.get("jwt_secret_key")
  );
};

const Admin = mongoose.model("Admin", adminSchema);

const validate = admin => {
  const schema = joi.object({
    username: joi.string().min(5).max(60).required(),
    email: joi.string().min(5).max(100).required().email(),
    password: joi.string().min(5).max(255).required()
  });
  return schema.validate(admin);
};

module.exports = {
  Admin,
  validate
};
