var http = require('http');
var url = require('url');

var server = new http.Server(function (req,res) {

    console.log(req.headers);



    var urlParsed = url.parse(req.url, true);
    debugger;
    console.log(urlParsed);

    if(urlParsed.pathname == '/echo' && urlParsed.query.message){
        // res.writeHead(200, 'OK', {'Cache-control' : 'no-chache'});
        res.setHeader('Cache-control', 'no-cache, no-store, must-revalidate') //removeHeader
        res.end(urlParsed.query.message);
    }else{
        res.statusCode = 404; //page not found
        res.end('page not found');
    }

});

server.listen(8080, '127.0.0.1')

console.log('server is running');
