const express = require("express");
const Auth = require("../middleware/auth");
const Admin = require("../middleware/admin");
const router = express.Router();
const { Podcast, validate } = require("../models/Podcast");
const Upload = require("../containers/upload");

router.get("/", [Auth, Admin], async (req, res) => {
  const podcast = await Podcast.find().sort("name");
  if (!podcast) return res.status(404).send("No Podcast found");
  res.send(podcast);
});

router.get("/:id", async (req, res) => {
  const podcast = await Podcast.findById(req.params.id);
  if (!podcast)
    return res
      .status(404)
      .send({ success: false, message: "podcast could not be found" });
  return res.status(200).send(podcast);
});

router.post("/", Auth, async (req, res) => {
  const { title, description, tag } = req.fields;
  const { error } = validate({ title, description, tag });
  if (error)
    return res
      .status(400)
      .send({ success: false, message: error.details[0].message });
  let podcast = await Podcast.find({ title });
  console.log(await podcast);
  if (podcast.length > 0)
    return res.status(400).send("Please choose another title for your podcast");
  Upload(req, res, error => {
    if (error) {
      return res.status(500).send("Try again");
    } else {
      if (req.file == undefined) {
        return res.status(400).send("Select a file");
      } else {
        const fullPath = "podcasts/" + req.file.filename;
        const document = {
          file: fullPath,
          title,
          description,
          tag
        };
        var podcast = new Podcast(document);
        podcast.save(function (error) {
          if (error) {
            throw error;
          }
          return res.status(200).send(podcast);
        });
      }
    }
  });
});

router.put("/:id", [Auth, Admin], async (req, res) => {
  const podcast = await Podcast.findByIdAndUpdate(req.params.id, req.body);
  if (!podcast)
    return res.status(404).send({
      success: false,
      message: "Podcast could not be found"
    });
  return res.send(podcast);
});

router.delete("/:id", [Auth, Admin], async (req, res) => {
  const podcast = await Podcast.findByIdAndRemove(req.params.id);
  if (!podcast)
    return res
      .status(404)
      .send({ success: false, message: "Podcast could not be found" });

  res.status(200).send(podcast);
});

module.exports = router;
