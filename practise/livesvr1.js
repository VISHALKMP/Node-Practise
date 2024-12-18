const http = require('http');



http.createServer( (hello,byby) => 
    {
    byby.write("<h1>The server is created</h1>")
    byby.end();
}).listen(4500);