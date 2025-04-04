const listings = require("../models/listings");

exports.homes = (req, res) => {
  res.render("home", { listings: listings });
};

exports.postAddHome = (req, res) => {
  listings.push({
    title: req.body.title,
    price: req.body.price,
    location: req.body.location,
  });

  res.redirect("/success");
};

exports.getAddHome = (req, res) => {
  res.render("add-listing");
};
