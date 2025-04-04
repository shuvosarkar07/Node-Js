const path = require("path");
const pathUtils = require("../utils/pathUtils");

exports.pageNotFound = (req, res, next) => {
  res.status(404).sendFile(path.join(pathUtils, "views", "404.html"));
};
