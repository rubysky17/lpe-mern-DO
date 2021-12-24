const express = require("express");
const rootRouter = express.Router();

// import Router
const { userRouter } = require("./user.router");
const { authRouter } = require("./auth.router");
const { categoryRouter } = require("./category.router");
const { productRouter } = require("./product.router");

rootRouter.use("/users", userRouter);
rootRouter.use("/auth", authRouter);
rootRouter.use("/category", categoryRouter);
rootRouter.use("/product", productRouter);

module.exports = {
  rootRouter,
};
