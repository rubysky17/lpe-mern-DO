const multer = require("multer");

const uploadImageSingle = (type) => {
  const upload = multer({
    storage: multer.diskStorage({}),
    fileFilter: function (req, file, cb) {
      const extensionImageList = [".png", ".jpg", ".jpeg"];
      const extension = file.originalname.slice(-4);
      const check = extensionImageList.includes(extension);

      if (check) {
        cb(null, true);
      } else {
        cb(new Error("Error file extension!"));
      }
    },
  });

  return upload.single(type);
};

const multipleImageUpload = (type, amount) => {
  const upload = multer({
    storage: multer.diskStorage({}),
    fileFilter: function (req, file, cb) {
      // let extensionList = ["image/png", "image/jpeg", "image/jpg"];

      // if (extensionList.indexOf(file.mimetype) === -1) {
      //   cb(new Error("Error file extension!"), null);
      // } else {
      //   cb(null, true);
      // }

      const extensionImageList = [".png", ".jpg", ".jpeg"];
      const extension = file.originalname.slice(-4);
      const check = extensionImageList.includes(extension);

      if (check) {
        cb(null, true);
      } else {
        cb(new Error("Error file extension!"));
      }
    },
  });

  return upload.array(type, amount);
};

module.exports = {
  uploadImageSingle,
  multipleImageUpload,
};
