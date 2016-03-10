function Universe(){
    var instance = this;
    this.start_time = 0;
    this.something = 'sth';
    Universe = function(){
        return instance;
    } 
}

Universe.prototype

var uni01 = new Universe();
var uni02 = new Universe();
console.log(uni01 === uni02)
