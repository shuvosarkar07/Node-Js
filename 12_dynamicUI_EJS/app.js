const rootDir = require("./utils/pathUtils");
const path = require("path");
const express = require("express");

const userRouter = require("./routes/userRouter");
const {hostRouter} = require("./routes/hostRouter");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.urlencoded());
app.use(userRouter);
app.use("/host", hostRouter);

app.use(express.static(path.join(rootDir, "public")));

app.use((req, res, next) => {
  res.status(404).render("404", {});
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
