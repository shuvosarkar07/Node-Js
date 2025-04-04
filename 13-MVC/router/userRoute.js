const express = require("express");
const router = express.Router();
// const { listing } = require("./hostRoute");

const { homes } = require("../controllers/homes");

router.get("/", homes);

module.exports = router;
