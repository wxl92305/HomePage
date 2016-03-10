function Universe(){
    if(typeof Universe.instance === 'object'){
        Universe.instance.start_time +=1;
        return Universe.instance;
    }
    this.start_time = 0;
    this.something = 'sth';
    Universe.instance = this;
}

var uni01 = new Universe();
console.log(uni01.start_time);
var uni02 = new Universe();
console.log(uni02.start_time);
console.log(uni01 === uni02);