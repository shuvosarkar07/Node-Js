const express = require("express");
const hostRouter = express.Router();
const path = require("path");

hostRouter.get("/add-home", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../views/addHome.html"));
});

hostRouter.post("/add-home", (req, res, next) => {
  console.log(req.body);
  res.sendFile(path.join(__dirname, "../views/addHome.html"));
});

module.exports = hostRouter;
