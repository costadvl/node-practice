var Evento = require('events').EventEmitter;

var db = new Evento();

function Request() {
    var self = this;

    this.bigData = new Array(1e6).join('*');
    this.send = function (data) {
        console.log(data)
    };

    function onData(info) {
        self.send(info);
    }

    this.end = function () {
        db.removeListener('data', onData);
    }
    db.on('data', onData);
}
 //funciona de modo normal --- al ser una variable local la crea y la limpia
setInterval(function () {
    var request = new Request();
    console.log(process.memoryUsage().heapUsed);
    console.log(db);
    request.end();
}, 200);
