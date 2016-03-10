var agg = (function(){
    var index = 0,
        data = [2,3,4,5,6,7],
        length = data.length;
    return {
        hasNext:function(){
          return index < length;  
        },
        next:function(){
            var element;
            if(!this.hasNext()){
                return null;
            }
            element = data[index];
            index = index+2;
            return element;
        },
        rewind: function () {
            index = 0;
        },
        current: function () {
            return data[index];
        }
    }    
}());

// var element;
// while (element = agg.next()) {
//     console.log(element);
// }
// go back

console.log("cuurent:"+agg.current()); // 1
while(agg.hasNext()){
    console.log(agg.next());
}
agg.rewind();
console.log("cuurent:"+agg.current()); // 1