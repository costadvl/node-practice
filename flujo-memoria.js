// ver uso de la memoria con process ---- nativo de node
function Request() {
    var self = this;

    this.bigData = new Array(1e6).join('*');
    this.send = function (data) {
        console.log(data)
    };

    this.onError = function () {
        self.send('lo sentimos tenemos un problema ,.|..')
    };
}
 //funciona de modo normal --- al ser una variable local la crea y la limpia
setInterval(function () {
    var request = new Request();
    console.log(process.memoryUsage().heapUsed);
}, 200);
