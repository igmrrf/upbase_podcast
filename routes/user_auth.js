const router = require("express").Router();
const { User, validate } = require("../models/User");

router.post("/", async (req, res) => {
  const { email, password } = req.body;
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  let user = await User.findOne({ email });
  if (!user) return res.send(400).send("Invalid email or password");
  const userPassword = await bcrypt.compare(password, user.password);
  if (!userPassword) return res.send("Invalid email or password");
  const token = user.generateaAuthToken();
  res.send(token);
});

module.exports = router;
