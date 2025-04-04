// external module
const express = require('express');

const app = express();


app.use("/", (req, res, next) => {
    console.log("came in first middleware", req.url, req.method);
    next();
})

app.use("/express", (req, res, next) => {
    console.log("came in second middleware", req.url, req.method);
    res.send("<h1>Hello from express</h1>");
})




const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on the port ${PORT}`);
})