const mongoose = require("mongoose");
const joi = require("@hapi/joi");
const config = require("config");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    default: "",
    minlength: 5,
    maxlength: 50,
    required: true,
    trim: true,
    lowercase: true
  },
  middleName: {
    type: String,
    default: "",
    minlength: 5,
    maxlength: 50,
    trim: true,
    lowercase: true
  },
  lastName: {
    type: String,
    default: "",
    minlength: 5,
    maxlength: 50,
    trim: true,
    lowercase: true,
    require: true
  },
  email: {
    type: String,
    default: "",
    minlength: 10,
    maxlength: 100,
    required: true,
    trim: true,
    lowercase: true,
    unique: true
  },
  mobile: {
    type: Number,
    minlength: 8,
    maxlength: 20,
    trim: true,
    unique: true
  },
  password: {
    type: String,
    default: "",
    minlength: 8,
    maxlength: 1024,
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
    firstName: joi.string().min(5).max(50).required(),
    middleName: joi.string().min(3).max(30).required(),
    lastName: joi.string().min(5).max(50).required(),
    email: joi.string().min(10).max(100).required().email(),
    mobile: joi.number().required(),
    password: joi.string().min(8).max(1024).required()
  });
  return schema.validate(user);
};

module.exports = {
  User,
  validate
};
