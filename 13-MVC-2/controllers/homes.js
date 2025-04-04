const listing = [];

exports.getSuccess = (req, res) => {
  res.render("success");
};

exports.getAddListing = (req, res) => {
  res.render("add-listing");
};

exports.postAddListing = (req, res) => {
  listing.push({
    title: req.body.title,
    price: req.body.price,
    location: req.body.location,
  });
  res.redirect("/success");
};

exports.getHome = (req, res) => {
  res.render("home", { listings: listing });
};

// Export listing if needed elsewhere
exports.listing = listing;
