const express = require("express");
const blogRouter = express.Router();

const {
  uploadImageSingle,
} = require("../middlewares/upload/upload-image.middleware");

const {
  authenticate,
  authorize,
} = require("../middlewares/auth/verify-token.middleware");

const {
  uploadImage,
  create,
  remove,
  edit,
} = require("../controllers/blog.controller");

// Upload Image when write blog
blogRouter.post("/upload-image-blog", uploadImageSingle("blog"), uploadImage);

// create blog
blogRouter.post(
  "/create-post",
  authenticate,
  authorize(["admin"]),
  uploadImageSingle("blog"),
  create
);

// delete blog
// blogRouter.delete("/delete-post", authenticate, authorize(["admin"]), remove);

// Edit blog
// blogRouter.put("/edit-post", authenticate, authorize(["admin"]), edit);

// Find post by topic

// Find post by keyword

// Get post id
module.exports = {
  blogRouter,
};
