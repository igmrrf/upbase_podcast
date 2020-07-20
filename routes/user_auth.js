const router = require("express").Router();
const bcrypt = require("bcrypt");
const joi = require("@hapi/joi");
const { User } = require("../models/User");

router.post("/", async (req, res) => {
  const { email, password } = req.body;
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  let user = await User.findOne({ email });
  if (!user) return res.send(400).send("Invalid email or password");
  const userPassword = await bcrypt.compare(password, user.password);
  if (!userPassword) return res.send("Invalid email or password");
  const token = user.generateAuthToken();
  res.send({ token });
});

const validate = user => {
  const schema = joi.object({
    email: joi.string().min(10).max(100).required().email(),
    password: joi.string().min(8).max(1024).required()
  });
  return schema.validate(user);
};

module.exports = router;
