const router = require("express").Router();
const { Admin, validate } = require("../models/Admin");

router.post("/", async (req, res) => {
  const { username, password } = req.body;
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  let admin = await Admin.findOne({ username });
  if (!admin) return res.send(400).send("Invalid email or password");
  const adminPassword = await bcrypt.compare(password, admin.password);
  if (!adminPassword) return res.send("Invalid email or password");
  const token = admin.generateaAuthToken();
  res.send(token);
});

module.exports = router;
