const http = require('http');

http.createServer((req, res)=>{
    res.write("Hello I am Ahmer");
    res.end();
}).listen(4500);