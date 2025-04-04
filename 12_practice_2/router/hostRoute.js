const express = require("express");
const router = express.Router();
router.get("/add-listing", (req, res) => {
    res.render("add-listing");
});

const listing = [];

router.post("/add-listing", (req, res) => {
    listing.push({
        title: req.body.title,
        price: req.body.price,
        location: req.body.location
    });
    // console.log(listing);

    res.redirect("/success");
});

router.get("/success", (req, res) => {
    res.render("success");
});

exports.hostRouter = router;
exports.listing = listing;
