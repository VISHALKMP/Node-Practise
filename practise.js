// const http = require('http');
// http.createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.write('<marquee>Hello World!<marquee>');
//     res.end();
// }).listen(8080);
// const { error } = require('console');
const fs = require('fs');
const http = require('http');
const server = http.createServer((req ,res)=>{
    fs.readFile('./index.html' , (err,data)=>{
        if(err){
            res.writeHead(404,{'content-type':'text/plan'})
            res.write('File Not Found')}

            else {
                res.writeHead(200,{'content-type':'text/html'})
                res.write(data)
            }
            res.end();
    })
})