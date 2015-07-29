var util = require('util');


var obj = {
    a : 5,
    b : 6,
    inspect: function(){
        return 123;
    }
};
 obj.self = obj;

 console.log(util.inspect(obj));


var str = util.format('My %s %d %j', 'string', 123, {test: 'OBJ'});
console.log(str);

// inherits OBJS
////////////////
//padre
function Animal(name){
    this.name =name;
}

Animal.prototype.walk = function () {
    console.log('anda '+this.name);
};

//hijo
function Rabbit(name) {
    this.name = name;
}
//Rabbit hereda de Animal
util.inherits(Rabbit, Animal);

Rabbit.prototype.jump = function(){
    console.log('salta '+this.name);
};

var rabbit = new Rabbit('por el bosque');
rabbit.walk();
rabbit.jump();
