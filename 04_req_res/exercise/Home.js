const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome - My Store</title>
    <style>
        nav {
            background-color: #333;
            padding: 1rem;
        }
        nav a {
            color: white;
            text-decoration: none;
            margin: 0 15px;
        }
        .welcome {
            text-align: center;
            padding: 50px;
        }
    </style>
</head>
<body>
    <nav>
        <a href="/">Home</a>
        <a href="/men">Men</a>
        <a href="/women">Women</a>
        <a href="/kids">Kids</a>
        <a href="/cart">Cart</a>
    </nav>
    
    <div class="welcome">
        <h1>Welcome to Our Store!</h1>
        <p>Explore our collection for Men, Women, and Kids.</p>
    </div>
</body>
</html>`);
    return res.end();
  } else if (req.url.toLowerCase() === "/men") {
    res.setHeader("Content-Type", "text/html");
    res.write(`
            <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Men's Collection</title>
    <style>
        nav {
            background-color: #333;
            padding: 1rem;
        }
        nav a {
            color: white;
            text-decoration: none;
            margin: 0 15px;
        }
        .content {
            padding: 20px;
        }
    </style>
</head>
<body>
    <nav>
        <a href="/">Home</a>
        <a href="/men">Men</a>
        <a href="/women">Women</a>
        <a href="/kids">Kids</a>
        <a href="/cart">Cart</a>
    </nav>
    
    <div class="content">
        <h1>Men's Collection</h1>
        <p>Welcome to our men's section. Discover the latest trends in men's fashion.</p>
    </div>
</body>
</html>
        `);
    return res.end();
  } else if (req.url.toLowerCase() === "/women") {
    res.setHeader("Content-Type", "text/html");
    res.write(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Women's Collection</title>
    <style>
        nav {
            background-color: #333;
            padding: 1rem;
        }
        nav a {
            color: white;
            text-decoration: none;
            margin: 0 15px;
        }
        .content {
            padding: 20px;
        }
    </style>
</head>
<body>
    <nav>
        <a href="/">Home</a>
        <a href="/men">Men</a>
        <a href="/women">Women</a>
        <a href="/kids">Kids</a>
        <a href="/cart">Cart</a>
    </nav>
    
    <div class="content">
        <h1>Women's Collection</h1>
        <p>Explore our stylish women's clothing and accessories.</p>
    </div>
</body>
</html>`);
    return res.end();
  } else if (req.url.toLowerCase() === '/kids') {
    res.setHeader("Content-Type", "text/html");
    res.write(`
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kids' Collection</title>
    <style>
        nav {
            background-color: #333;
            padding: 1rem;
        }
        nav a {
            color: white;
            text-decoration: none;
            margin: 0 15px;
        }
        .content {
            padding: 20px;
        }
    </style>
</head>
<body>
    <nav>
        <a href="/">Home</a>
        <a href="/men">Men</a>
        <a href="/women">Women</a>
        <a href="/kids">Kids</a>
        <a href="/cart">Cart</a>
    </nav>
    
    <div class="content">
        <h1>Kids' Collection</h1>
        <p>Find cute and comfortable clothing for kids of all ages.</p>
    </div>
</body>
</html>
        `);
    return res.end();
  } else if (req.url.toLowerCase() === '/cart') {
    res.setHeader("Content-Type", "text/html");
    res.write(`
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Cart</title>
    <style>
        nav {
            background-color: #333;
            padding: 1rem;
        }
        nav a {
            color: white;
            text-decoration: none;
            margin: 0 15px;
        }
        .content {
            padding: 20px;
        }
    </style>
</head>
<body>
    <nav>
        <a href="/">Home</a>
        <a href="/men">Men</a>
        <a href="/women">Women</a>
        <a href="/kids">Kids</a>
        <a href="/cart">Cart</a>
    </nav>
    
    <div class="content">
        <h1>Your Shopping Cart</h1>
        <p>View and manage items in your shopping cart here.</p>
    </div>
</body>
</html>
        `);
    return res.end();
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});