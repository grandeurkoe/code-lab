// Import the built-in http module.
const http = require('http');

// Create a server
const server = http.createServer((req,res) => {
    res.writeHead(200, {"Content-Type": "text/html"});
    res.end("<h1>Hello, World!</h1>");
});

// Listen to server at port 8080
server.listen(8080, () => {
    console.log("Server running at https://localhost:8080");
});