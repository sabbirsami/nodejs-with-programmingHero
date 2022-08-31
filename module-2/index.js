const { name, add } = require("./other");
// console.log(name);

const http = require("http");
const url = require("url");
const fs = require("fs");

// const server = http.createServer((req, res) => {
//     // if (req.url === "/") {
//     //     res.writeHead(200, { "Content-Type": "text/html" });
//     //     res.write("<p>This is home page</p>");
//     //     // res.end();
//     // } else if (req.url === "/course") {
//     //     res.writeHead(200, { "Content-Type": "application/json" });
//     //     res.write(JSON.stringify({ course: "ACC" }));
//     //     res.end();
//     // }

//     const url_address =
//         "http://localhost:5000/contact?name=sami&country=bangladesh";
//     const parsed_url = url.parse(url_address, true);
//     const queryObject = parsed_url.query;
//     console.log(queryObject);
// });
const server = http.createServer((req, res) => {
    if (req.url === "/") {
        // fs.readFile("data.txt", (err, data) => {
        //     if (err) {
        //         res.write("Failed to read data");
        //         res.end();
        //     } else {
        //         res.write(data);
        //         res.end();
        //     }
        // });

        fs.writeFile("data.txt", "Hello Node Js", (err) => {
            if (err) {
                res.write("Failed to write data");
                res.end();
            } else {
                res.write("data write successfully");
                res.end();
            }
        });
    }
});

const PORT = 5000;
server.listen(PORT);
console.log(` server is running at ${PORT}`);
