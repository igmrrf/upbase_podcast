const router = require("express").Router();
const joi = require("@hapi/joi");
const bcrypt = require("bcrypt");
const { Admin } = require("../models/Admin");

router.post("/", async (req, res) => {
  const { username, password } = req.body;
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  let admin = await Admin.findOne({ username });
  if (!admin) return res.send(400).send("Invalid email or password");
  const adminPassword = await bcrypt.compare(password, admin.password);
  if (!adminPassword) return res.send("Invalid email or password");
  const token = admin.generateAuthToken();
  res.send({ token });
});

const validate = admin => {
  const schema = joi.object({
    username: joi.string().min(5).max(60).required(),
    password: joi.string().min(8).max(1024).required()
  });
  return schema.validate(admin);
};

module.exports = router;
