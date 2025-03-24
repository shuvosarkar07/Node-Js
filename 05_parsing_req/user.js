const fs = require("fs");
const { buffer } = require("stream/consumers");

const userRequestHandler = (req, res) => {
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
            <style>
            body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
}

form {
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width: 300px;
    text-align: center;
}

h1 {
    color: #333;
}

input[type="text"] {
    width: 95%;
    padding: 8px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
}

div {
    margin: 10px 0;
}

input[type="radio"] {
    margin: 0 5px;
}

button {
    background-color: #28a745;
    color: white;
    border: none;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    width: 100%;
}

button:hover {
    background-color: #218838;
}

            </style>
            <body>
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
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on("end", () => {
      const fullBody = Buffer.concat(body).toString();
      console.log(fullBody);
      const params = new URLSearchParams(fullBody);
      // const bodyObject = {};
      // for (const [key, val] of params.entries()) {
      //     bodyObject[key] = val;
      // }

      const bodyObject = Object.fromEntries(params);
      console.log(bodyObject);

      fs.writeFileSync("user.txt", JSON.stringify(bodyObject));
    });

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
};

module.exports = userRequestHandler;
