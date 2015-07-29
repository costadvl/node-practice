var http = require('http');
var url = require('url');

var server = http.createServer();

server.on('request', function (req,res) {
    var urlParsed = url.parse(req.url, true);
    debugger;
    if (req.method == 'GET' && urlParsed.pathname == '/echo') {
        res.end(urlParsed.pathname);
        return;
    }

    res.statusCode= 404;
    res.end('not Found');

});

server.listen(1337);
console.log('Server is running');
