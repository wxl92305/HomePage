function Sale(price){
    this.price = price || 100;
    this.decorators_list = [];
}

// Sale.prototype.getPrice = function(){
//     return this.price;
// }

Sale.decorators = {};
Sale.decorators.fedtax = {
    getPrice : function(price){
        return price + price*0.05;
    }
}

Sale.decorators.quebec = {
    getPrice: function(price){
        return price + price*0.075;
    }
}

Sale.decorators.money = {
    getPrice : function(price){
        return "$"+price.toFixed(2);
    }
}

Sale.decorators.CNY = {
    getPrice : function(price){
        return "￥"+price.toFixed(2);
    }
}

Sale.prototype.decorate = function(decorator){
    this.decorators_list.push(decorator);
}

Sale.prototype.getPrice = function(){
    var price = this.price,
        i,
        max = this.decorators_list.length,
        name;
    for(i=0;i<max;i++){
        name = this.decorators_list[i];
        price = Sale.decorators[name].getPrice(price);
    }    
    return price;
}

var sale = new Sale(200); // the price is 100 dollars
sale.decorate('fedtax'); // add federal tax
sale.decorate('quebec'); // add provincial tax
//sale.decorate('money'); // format like money
sale.decorate('CNY'); // format like money
console.log(sale.getPrice()); // "$112.88"