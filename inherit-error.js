var util = require('util');

//Error types
function PhraseError(message) {
    this.message = message;
    Error.captureStackTrace(this, PhraseError);
}
util.inherits(PhraseError, Error);
PhraseError.prototype.name = 'Phrase-Error';

function HttpError(status, message) {
    this.status = status;
    this.message = message;
    Error.captureStackTrace(this, HttpError);
}
util.inherits(HttpError, Error);
HttpError.prototype.name = 'Http-Error';

// work station
var phrases = {
    "Hello" : "hola",
    "world" : "mundo"
};

function getPhrases(name){
    if(!phrases[name]){
        throw new PhraseError('No existe tal '+name+' en el objeto'); // HTTP 500, info!
    }
    return phrases[name];
}
function makepage(url) {
    if (url!= 'index.html') {
        throw new HttpError(404,'Esta pagina no existe'); //HTTP 404
    }
    return util.format("%s, %s!", getPhrases('***'), getPhrases('world'));
}

try {
    var page = makepage('index.html');
    console.log(page)
} catch (e) {
    if (e instanceof HttpError) {
        console.log(e.status, e.message);
    } else {
        console.error('Error %s\n mensaje: %s\n stack: %s', e.name, e.message, e.stack);
    }
}
