var user = require('./user');

var db = require('db');
db.connect();

function run(){
    var vadim = new user.User('vadim');
    var otro = new user.User('otro tio');
    vadim.hello(otro);

    console.log(db.getPhrases('Run successful'));
}



if (module.parent){
    exports.run = run;
    console.log('module.parent is true');
}else{
    run();
    console.log('module.parent is false')
}
