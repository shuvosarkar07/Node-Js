const express = require("express");
const router = express.Router();
const { listing } = require("./hostRoute");

router.get("/", (req, res) => {
    res.render("home", { listings: listing });
});



module.exports = router;