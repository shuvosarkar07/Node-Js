const express = require("express");
const userRouter = express.Router();
const rootDir = require("../utils/pathUtils");

const path = require('path');

userRouter.get("/", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", 'home.html'));
});

module.exports = userRouter;
