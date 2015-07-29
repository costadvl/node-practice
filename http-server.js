var http = require('http');

var server = new http.Server();

var emit = server.emit;
server.emit = function (event) {
    console.log(event);
    emit.apply(server, arguments);
}


server.listen(8081, '127.0.0.1');
var counter = 0;
server.on('request', function (req, res) {
    res.end('holamundo : ' + ++counter);
});
