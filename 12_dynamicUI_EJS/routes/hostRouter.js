const express = require("express");
const hostRouter = express.Router();
const path = require("path");
const rootDir = require("../utils/pathUtils");

hostRouter.get("/add-home", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", 'addHome.html'));
});

const registeredHomes = [];

hostRouter.post("/add-home", (req, res, next) => {
  // console.log(req.body);
  registeredHomes.push({houseName: req.body.houseName});
  res.sendFile(path.join(rootDir, "views", "homeAdded.html"));
});


exports.registeredHomes = registeredHomes;
exports.hostRouter = hostRouter;
