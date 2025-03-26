const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use((req, res, next) => {
  console.log("came in first middleware: ", req.url, req.method);
  next();
});

app.use((req, res, next) => {
  console.log("came in second middleware: ", req.url, req.method);
  next();
});

// app.use('/contact-us', (req, res, next) => {
//     res.send("<h1>Hello from third middleware</h1>");
// })

app.get('/', (req, res, next) => {
  console.log("handling / middleware: ", req.url, req.method);
  res.send(`<h1>Welcome to the home page</h1>`);
});

app.get('/contact-us', (req, res, next) => {
  console.log("handling /contact-us middleware: ", req.url, req.method);
  res.send(`<h1>Welcome to the /contact-us page</h1>
        <form action='/contact-us' method="POST">
            <input type="text" name="name" placeholder="Enter your name" required>
            <input type="email" name="email" placeholder="Enter your email" required>
            <button type="submit">Submit</button>
        </form>
    `);
});

app.post('/contact-us', (req, res, next) => {
    console.log("handling /contact-us POST middleware: ", req.url, req.method);
    res.send(`<h1>Thank you for submitting the form</h1>
            <h2>Our team will contact you soon :)</h2>
        `);
    });

app.listen(3000, () => {
  console.log("server is running on port 3000");
});