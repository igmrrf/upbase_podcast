const router = require("express").Router();

router.get("/", async (req, res) => {
  res.send("Welcome Home, ");
});

module.exports = router;
