const express = require("express");
const router = express.Router();
const listings = require("../models/listings");

router.get("/add-listing", (req, res) => {
  res.render("add-listing");
});

router.post("/add-listing", (req, res) => {
  listings.push({
    title: req.body.title,
    price: req.body.price,
    location: req.body.location,
  });
  res.redirect("/success");
});

router.get("/success", (req, res) => {
  res.render("success");
});

exports.hostRouter = router;
