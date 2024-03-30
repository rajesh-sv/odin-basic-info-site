const http = require("http");
const fs = require("fs");

http
  .createServer((req, res) => {
    let htmlFileToServe;
    console.log(req.url);
    if (req.url === "/") htmlFileToServe = "./index.html";
    else if (req.url === "/about") htmlFileToServe = "./about.html";
    else if (req.url === "/contact-me") htmlFileToServe = "./contact-me.html";
    else htmlFileToServe = "./404.html";

    fs.readFile(htmlFileToServe, (err, data) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  })
  .listen(8080);
