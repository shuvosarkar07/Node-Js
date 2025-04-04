const express = require("express");
const path = require("path");
const pathUtils = require("./utils/pathUtils");
const userRouter = require("./router/userRoute");
const { hostRouter } = require("./router/hostRoute");
const errorController = require("./controllers/errors");

const app = express();
app.use(express.urlencoded());
app.use(express.static(path.join(pathUtils, "public")));

// telling express to use ejs as the view engine
app.set("view engine", "ejs");
app.set("views", path.join(pathUtils, "views"));

app.use(userRouter);
app.use(hostRouter);

app.use(errorController.pageNotFound);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
