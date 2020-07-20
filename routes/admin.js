const router = require("express").Router();
const bcrypt = require("bcrypt");
const { Admin, validate } = require("../models/Admin");

router.post("/", async (req, res) => {
  const { username, email, password } = req.body;
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  let admin = await Admin.findOne({ email });
  if (admin)
    return res
      .status(401)
      .send("Admin with these details already exist, Please login");

  admin = new Admin({
    username,
    email,
    password
  });
  const salt = await bcrypt.genSalt(10);
  admin.password = await bcrypt.hash(admin.password, salt);
  await admin.save();
  token = admin.generateAuthToken();
  res
    .header("x-upbase-auth-token", token)
    .send(_.pick(admin, ["id", "isAdmin"]));
});

module.exports = router;
