const express = require("express");
const path = require("path");
const homeRouter = require("./routes/homeRouter");
const contactRouter = require("./routes/contactRouter");

const app = express();

app.use(express.urlencoded());

app.use(homeRouter);
app.use(contactRouter);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
