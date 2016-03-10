var data = {
    var_name:"tobi",
    var_age:"unknown",
    var_username :"isAlphaNum123123&*^&*"
}

var validator = {
    types:{},
    message:[],
    config:{},
    validate:function(data){
        var i,msg,type,checker,result_ok;
        this.messages = [];
        for(i in data){
            if(data.hasOwnProperty(i)){
                type = this.config[i];
                checker = this.types[type];
                if(!type){
                    continue;
                }
                if(!checker){
                    throw {
                        name:"ValidationError",
                        message:"No handler to validate type "+type
                    }
                }
                result_ok = checker.validate(data[i]);
                if(!result_ok){
                    console.log("not ok")
                    msg = "Invalid value for *" +i+"*,"+checker.instructions;
                    this.messages.push(msg);
                }
            }
        }
        return this.hasErrors();
    },
    hasErrors:function(){
        return this.message.length !== 0;
    }
}

validator.config = {
    var_name : "NotNull",
    var_age : "isNumber",
    var_username :"isAlphaNumber"
}

validator.types.NotNull = {
    validate:function(value){
        return value !=="";
    },
    instructions:"value can't be empty"
}

validator.types.isNumber = {
    validate:function(value){
        return !isNaN(value);
    },
    instructions:'value must be Number'
}

validator.types.isAlphaNumber = {
    validate:function(value){
        return ! /[^a-z0-9]/i.test(value);
    },
    instructions:'value must with alphaNumber'
}

validator.validate(data);

if (validator.hasErrors() === false) {
    console.log(validator.messages.join("\n"));
}
