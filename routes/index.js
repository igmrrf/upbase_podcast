const router = require("express").Router();

router.get("/", async (req, res) => {
  res.send("Welcome Home page comming soon");
});

module.exports = router;
