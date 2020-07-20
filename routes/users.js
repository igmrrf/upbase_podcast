const router = require("express").Router();
const bcrypt = require("bcrypt");
const { User, validate } = require("../models/User");

router.post("/", async (req, res) => {
  const { firstName, middleName, lastName, email, mobile, password } = req.body;
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  let user = await User.findOne({ email });
  if (user) return res.status(401).send("User already exist, please login");

  user = new User({
    firstName,
    middleName,
    lastName,
    email,
    mobile,
    password
  });
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
  await user.save();
  token = user.generateAuthToken();
  res
    .header("x-upbase-auth-token", token)
    .send(_.pick(user, ["id", "name", "email"]));
  res.send(user);
});
