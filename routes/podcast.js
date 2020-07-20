const express = require("express");
const Auth = require("../middleware/auth");
const Admin = require("../middleware/admin");
const router = express.Router();
const { Podcast, validate } = require("../models/podcast");

router.get("/", async (req, res) => {
  const podcast = await Podcast.find().sort("name");
  res.send(podcast);
});

router.get("/:id", async (req, res) => {
  const podcast = await podcast.findById(req.params.id);
  if (!podcast)
    return res
      .status(404)
      .send({ success: false, message: "podcast could not be found" });
  res.status(200).send(podcast);
});

router.post("/", Auth, async (req, res) => {
  const { error } = validate(req.body);
  if (error)
    return res
      .status(400)
      .send({ success: false, message: error.details[0].message });
  let podcast = await Podcast.find({ title, file });

  podcast = new podcast({
    title,
    description,
    tag,
    file
  });
  await podcast.save();
  res.send(podcast);
});

router.put("/:id", Auth, async (req, res) => {
  const { error } = validate(req.body);
  if (error)
    return res
      .statusCode(400)
      .send({ success: false, message: error.details[0].message });
  const podcast = await podcast.findByIdAndUpdate(req.params.id, req.body);
  if (!podcast)
    return res.status(404).send({
      success: false,
      message: "Podcast could not be found"
    });
  res.send(podcast);
  return;
});

router.delete("/:id", [Auth, Admin], async (req, res) => {
  const podcast = await podcast.findByIdAndRemove(req.params.id);
  if (!podcast)
    return res
      .status(404)
      .send({ success: false, message: "Podcast could not be found" });

  res.status(200).send(podcast);
});

module.exports = router;
