var fs = require('fs');

// fs.ReadStream hereda de stream.Readable
var stream = new fs.ReadStream('read.html');

stream.on('readable', function () {
    var data = stream.read();
    console.log(data);
});

stream.on('end',function () {
    console.log('The end');
});
