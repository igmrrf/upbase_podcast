const multer = require("multer");
const path = require("path");

const storageEngine = multer.diskStorage({
  destination: "./public/podcasts",
  filename: function (req, file, fn) {
    fn(
      null,
      new Date().getTime().toString() +
        "-" +
        file.filename +
        path.extname(file.originalname)
    );
  }
});

const validate = function (file, cb) {
  allowedFileTyes = /mp3|aac|m4a/;
  const extension = allowedFileTyes.test(
    path.extname(file.originalname).toLowerCase()
  );
  const mimeType = allowedFileTyes.test(file.mimetype);
  if (extension && mimeType) {
    return cb(null, true);
  } else {
    cb("invalid file  type. Only MP3, AAC and M4A files types are allowed");
  }
};

const Upload = multer({
  storage: storageEngine,
  limits: {
    fileSize: 500000
  },
  fileFilter: function (req, file, callback) {
    validate(file, callback);
  }
}).single("podcast");
