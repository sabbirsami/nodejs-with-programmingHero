const { name, add } = require("./other");
// console.log(name);

const http = require("http");

const server = http.createServer((req, res) => {
    res.end("hello node.js");
});

const PORT = 5000;
server.listen(PORT);
console.log(` server is running at ${PORT}`);
