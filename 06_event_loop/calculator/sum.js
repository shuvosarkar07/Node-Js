const sumRequestHandler = (req, res) => {
  console.log("Request URL: ", req.url);
  const body = [];
  let result;
  req.on("data", (chunk) => body.push(chunk));
  req.on("end", () => {
    const bodyStr = Buffer.concat(body).toString();
    const params = new URLSearchParams(bodyStr);
    const bodyObj = Object.fromEntries(params);
    result = parseInt(bodyObj.num1) + parseInt(bodyObj.num2);
    console.log(result);
  });
  res.setHeader("content-type", "text/html");
  res.write(`
              <html>
              <head>
                  <title>Result</title>
              </head>
              <body>
                  <h1>Result</h1>
                  <p>The sum is ${result}</p>
                  <a href="/calculator">Go back to calculator</a>
              </body>
              </html>
              `);
  return res.end();
};

module.exports = sumRequestHandler;
