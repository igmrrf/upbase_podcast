const multer = require("multer");
const path = require("path");

const storageEngine = multer.diskStorage({
  destination: "./public/podcasts",
  filename: function (req, file, fn) {
    fn(null, file.fieldname + "-" + new Date.now());
  }
});

const upload = multer({
  storage: storageEngine,
  limits: { fileSize: 200000 },
  fileFilter: function (req, file, callback) {
    validateFile(file, callback);
  }
}).single("podcast");

const validateFile = function (file, call) {
  allowedFileTypes = /mp3|aac|m4a/;
  const extension = allowedFileTypes.test(
    path.extname(file.originalname).toLowerCase()
  );
  const mimeType = allowedFileTypes.test(file.mimetype);
  if (extension && mimeType) {
    return call(null, true);
  } else {
    call("Invalid file type. Only MP3, AAC and M4A file are allowed.");
  }
};

module.exports = upload;
