const express = require("express");
const userRouter = express.Router();

// import controllers
const {
  getList,
  getDetail,
  update,
  create,
  remove,
  uploadAvatar,
  deleteAvatar,
} = require("../controllers/user.controller");

// import middleware
const {
  authenticate,
  authorize,
} = require("../middlewares/auth/verify-token.middleware");

const {
  uploadImageSingle,
} = require("../middlewares/upload/upload-image.middleware");

userRouter.get("/", getList);
userRouter.get("/:id", getDetail);
userRouter.post("/", authenticate, authorize(["admin"]), create);
userRouter.put("/:id", authenticate, update);
userRouter.delete("/:id", authenticate, authorize(["admin"]), remove);

userRouter.post(
  "/upload-avatar",
  authenticate,
  uploadImageSingle("avatar"),
  uploadAvatar
);
userRouter.post("/delete-avatar", authenticate, deleteAvatar);

module.exports = {
  userRouter,
};
