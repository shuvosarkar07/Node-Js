const path = require("path");
const pathUtils = require("../utils/pathUtils");

exports.pageNotFound = (req, res, next) => {
  console.log("404 handler triggered for path:", req.path);
  res.status(404).sendFile(path.join(pathUtils, "views", "404.html"));
};
