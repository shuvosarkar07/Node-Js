const http = require("http");


const server = http.createServer((req, res) => {
    // console.log(req)
    // console.log(req.url, req.method, req.headers);
    // process.exit();

    if (req.url === "/") {
        res.write('<Html>');
        res.write('<head><title>My First Page</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</Html>');
        return res.end();
    } else if (req.url == "/about") {
        res.write('<Html>');
        res.write('<head><title>About Us</title></head>');
        res.write('<body><h1>About Us</h1></body>');
        res.write('</Html>');
        return res.end();
    } 

    // res.setHeader("Content-Type", "text/html");
    // res.write('<Html>');
    // res.write('<head><title>My First Page</title></head>');
    // res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
    // res.write('</Html>');
    // res.end();
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});