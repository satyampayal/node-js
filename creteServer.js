const http = require('http');
http.createServer((req, resp) => {
    resp.write("<h1>this is my first server and not use </h1>");
    resp.end();
}).listen(45000);