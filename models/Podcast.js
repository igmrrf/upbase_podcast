const mongoose = require("mongoose");
const joi = require("@hapi/joi");
const winston = require("winston");

const podcastSchema = new mongoose.Schema({
  title: {
    type: String,
    default: "",
    minlength: 5,
    maxlength: 255,
    required: true
  },
  description: {
    type: String,
    default: "",
    minlength: 100,
    maxlength: 1000,
    required: true
  },
  tag: {
    type: Array,
    default: []
  },
  file: {
    type: File,
    required: true
  },
  dateUploaded: {
    type: Date,
    default: new Date.now()
  }
});

const Podcast = mongoose.model("Podcast", podcastSchema);

const validate = data => {
  const schema = joi.object({
    title: joi.string().min(5).max(255).required(),
    description: joi.string().min(100).max(1000).required(),
    tag: joi.array().required().max(5)
  });
};

module.exports = {
  Podcast,
  validate
};
