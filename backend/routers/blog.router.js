const express = require("express");
const blogRouter = express.Router();

const {
  uploadImageSingle,
} = require("../middlewares/upload/upload-image.middleware");

const { uploadImage } = require("../controllers/blog.controller");

blogRouter.post("/upload-image-blog", uploadImageSingle("blog"), uploadImage);

module.exports = {
  blogRouter,
};
