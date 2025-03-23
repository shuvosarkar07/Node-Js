const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  // console.log(req)
  // console.log(req.url, req.method, req.headers);
  // process.exit();

  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(`
        <!DOCTYPE html>
        <html>
            <head>
                <title>Welcome Home</title>
            </head>
            <body>
                <h1>Welcome home</h1>
                <form action="/submit-details" method="POST">
                    <input type="text" name="username" placeholder="Enter your name" required>
                    <div>
                        <input type="radio" name="gender" value="male" id="male" required>
                        <label for="male">Male</label>
                        <input type="radio" name="gender" value="female" id="female" required>
                        <label for="female">Female</label>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </body>
        </html>
    `);
    return res.end();
  } else if (
    req.url.toLocaleLowerCase() === "/submit-details" &&
    req.method === "POST"
  ) {
    fs.writeFileSync("user.txt", "DUMMY");
    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }

  res.setHeader("Content-Type", "text/html");
  res.write("<Html>");
  res.write("<head><title>My First Page</title></head>");
  res.write("<body><h1>Hello from my Node.js Server!</h1></body>");
  res.write("</Html>");
  res.end();
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
