const sumRequestHandler = require('./sum');

const userRequestHandler = (req, res) => {
  if (req.url === "/") {
    res.setHeader("content-type", "text/html");
    res.write(`
            <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home</title>
</head>
<body>
    <h1>Welcome Home</h1>
    <a href="/calculator">Calculator</a>
</body>
</html>
            `);
    return res.end();
  } else if (req.url === "/calculator") {
    res.setHeader("content-type", "text/html");
    res.write(`
            <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculator</title>
</head>
<body>
    <form action='/result' method='POST'>
        <input type="text" name="num1" placeholder="
        number 1" required>
        <input type="text" name="num2" placeholder="
        number 2" required>
        <button type="submit" name="submit" value="submit">Calculate Sum</button>
    </form>
</body>
</html>
            `);
    return res.end();
  } else if (req.url.toLowerCase() === "/result" && req.method === "POST") {
    return sumRequestHandler(req, res);
  }

  res.setHeader("content-type", "text/html");
  res.write(`
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>404 - Page Not Found</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
            background-color: #f0f0f0;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .container {
            text-align: center;
            padding: 20px;
        }

        h1 {
            font-size: 120px;
            color: #333;
            margin: 0;
            line-height: 1;
        }

        h2 {
            font-size: 30px;
            color: #666;
            margin: 20px 0;
        }

        p {
            font-size: 18px;
            color: #777;
            margin-bottom: 30px;
        }

        .btn {
            display: inline-block;
            padding: 12px 25px;
            background-color: #007bff;
            color: white;
            text-decoration: none;
            border-radius: 5px;
            transition: background-color 0.3s;
        }

        .btn:hover {
            background-color: #0056b3;
        }

        @media (max-width: 600px) {
            h1 {
                font-size: 80px;
            }
            h2 {
                font-size: 24px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>Sorry, the page you're looking for doesn't exist or has been moved.</p>
        <a href="/" class="btn">Back to Home</a>
    </div>
</body>
</html>
            `);
  return res.end();
};

module.exports = userRequestHandler;
