const { name, add } = require("./other");
// console.log(name);

const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write("<p>This is home page</p>");
        // res.end();
    } else if (req.url === "/course") {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.write(JSON.stringify({ course: "ACC" }));
        res.end();
    }
});

const PORT = 5000;
server.listen(PORT);
console.log(` server is running at ${PORT}`);
