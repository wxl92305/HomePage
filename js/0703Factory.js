//Factory
function CarMaker(){}

CarMaker.prototype.drive = function(){
    console.log("bilibili i have "+this.doors + "doors"); 
}

CarMaker.factory = function(type){
    var constr = type,
        newcar;
    if(typeof CarMaker[constr] !== 'function') {
        throw{
            name:"Error",
            message:constr + "doesn't exist"
        }
    }
    if(typeof CarMaker[constr].prototype.drive!=="function"){
        CarMaker[constr].prototype = new CarMaker();
    }
    newcar = new CarMaker[constr]();
    return newcar;
}

CarMaker.SUV = function(){
    this.doors = 8;
}

CarMaker.papi = function(){
    this.doors = 4;
}

CarMaker.tobi = function(){
    this.doors = 2;
}

var suvcar  = new CarMaker.factory("SUV");
var papicar = new CarMaker.factory("papi");
var tobicar = new CarMaker.factory("tobi");
// var fuckcar = new CarMaker.factory("fuck");

suvcar.drive();
papicar.drive();
tobicar.drive();
// fuckcar.drive();