var phrases;

exports.connect = function(){
    phrases = require('./es');
};

exports.getPhrases = function(name){
    if (!phrases[name]) {
        throw new Error('no hay coincidencias con '+ name)
    }
    return phrases[name];
};
