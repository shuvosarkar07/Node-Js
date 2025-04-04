const express = require("express");
const router = express.Router();
const homeController = require("../controllers/homes");

const listing = [];

router.get("/add-listing", homeController.getAddListing);
router.post("/add-listing", homeController.postAddListing);
router.get("/success", homeController.getSuccess);

module.exports = { hostRouter: router, listing };
