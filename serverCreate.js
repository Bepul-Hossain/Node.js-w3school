var http = require('http');

http.createServer(function(req, res){
    res.writeHead(400,{'ontent-Type':'text/html'});
    res.end('successfull');
}).listen(100);