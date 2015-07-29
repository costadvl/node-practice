var EventEmitter = require('events').EventEmitter;

var server = new EventEmitter;

server.on('request', function(req){
    req.approved = true;
});

server.on('request', function (req) {
    console.log(req);
});

server.emit('request', {from: "client"});
server.emit('request', {from: "Another client"});


server.on('error', function (err) {
    console.log(err);
});
server.emit('error', new Error('Error total')); //throw type error
