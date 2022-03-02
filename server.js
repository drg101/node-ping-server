const http = require('http');

const server = http.createServer((req, res) => {
    // console.log("got request", req)
    res.end('pong')
    console.log("request ponged")
});

server.listen(8080)

console.log(`Server is running on PORT: 8080`);