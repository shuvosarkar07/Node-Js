const express = require("express");
const userRouter = express.Router();
const rootDir = require("../utils/pathUtils");


const { registeredHomes } = require("./hostRouter");

userRouter.get("/", (req, res, next) => {
  console.log(registeredHomes)
  res.render('home', {registeredHomes: registeredHomes});
});

module.exports = userRouter;