const http = require("http")

const server = http.createServer((req, res) => {
    if (req.url === "/") {
      res.end("This is our Home page");
    } else if (req.url === "/about") {
      res.end("This is our About Page");
    } else {
      res.end(`<a href="/">Click here to go back</a>`);
    }
  });
server.listen(5000)