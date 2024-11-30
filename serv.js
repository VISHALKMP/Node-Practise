const fs = require("fs");
const http = require("http");
const path = require("path");


const indexContent = fs.readFileSync("bubble.html", "utf-8");
const canContent = fs.readFileSync("can.html", "utf-8");
const textContent = fs.readFileSync("text.html", "utf-8");

const serv = http.createServer((req, res) => {
  if (req.url === "/text") {
    return res.end("<h1>Home Page</h1>");
  } else if (req.url === "/can") {
    return res.end("<h1>About Page</h1>");
  } else if (req.url === "/contact") {
    return res.end(indexContent); 
  } else if (req.url === "/can") {
    return res.end(canContent);
  } else if (req.url === "/text") {
    return res.end(textContent);
  } else {

    const filePath = path.join(__dirname, req.url);
    const ext = path.extname(filePath);
    
   
    let contentType = "text/plain";
    if (ext === ".html") contentType = "text/html";
    else if (ext === ".css") contentType = "text/css";
    else if (ext === ".js") contentType = "application/javascript";
    else if (ext === ".jpg" || ext === ".jpeg") contentType = "image/jpeg";
    else if (ext === ".png") contentType = "image/png";
    else if (ext === ".gif") contentType = "image/gif";

    fs.readFile(filePath, (err, data) => {
      if (err) {
       
        res.writeHead(404, { "Content-Type": "text/html" });
        return res.end("<h1>400 Page Not Found</h1>");
      }
   
      res.writeHead(200, { "Content-Type": contentType });
      res.end(data);
    });
  }
});

serv.listen(2000, "localhost", () =>
  console.log("Connected with server at http://localhost:2000")
);
