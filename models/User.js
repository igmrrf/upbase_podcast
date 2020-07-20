const mongoose = require("mongoose");
const joi = require("@hapi/joi");
const config = require("config");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    default: "",
    min: 5,
    max: 50,
    required: true,
    trim: true,
    lowercase: true
  },
  middleName: {
    type: String,
    default: "",
    min: 5,
    max: 50,
    required: true,
    trim: true,
    lowercase: true
  },
  lastName: {
    type: String,
    default: "",
    min: 5,
    max: 50,
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
  mobile: {
    type: Number,
    min: 8,
    max: 20,
    trim: true,
    unique: true
  },
  password: {
    type: String,
    default: "",
    min: 5,
    max: 1024,
    required: true
  }
});

userSchema.methods.generateAuthToken = function () {
  return jwt.sign(
    { _id: this._id, email: this.email },
    config.get("jwt_secret_key")
  );
};

const User = mongoose.model("User", userSchema);

const validate = user => {
  const schema = joi.object({
    firstName: joi.string().min(5).max(60).required(),
    middlerName: joi.string().min(5).max(60),
    lastName: joi.string().min(5).max(60).required(),
    email: joi.string().min(5).max(100).required().email(),
    mobile: joi.number().min(8).max(20).required().email(),
    password: joi.string().min(5).max(255).required()
  });
  return schema.validate(user);
};

module.exports = {
  User,
  validate
};
