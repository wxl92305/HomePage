//Mediator
function Player(name){
    this.points = 0;
    this.name = name || "player";
}

Player.prototype.play = function(){
    this.points += 1;
    mediator.played();
}

var scoreboard = {
    update:function(score){
        var i,msg='';
        for(var i in score){
            if(score.hasOwnProperty(i)){
                msg +='Number '+i +' ';
                msg +=score[i];
                msg +='\n';
            }
        }
        console.log(msg);
    }
}

var mediator = {
    players:{},
    setup:function(){
        var players = this.players;
        players.home = new Player("Home-Alice");
        players.guest = new Player("Guest-Bob");
    },
    played:function(){
        var players = this.players,
            score={
                Home:players.home.points,
                Guest:players.guest.points
            };
        scoreboard.update(score);  
    },
    keypress:function(n){
        if(n===1){
            mediator.players.home.play();
        }
        if(n===0){
            mediator.players.guest.play();
        }
    }
}

mediator.setup();
mediator.keypress(0);
mediator.keypress(1);
mediator.keypress(0);
mediator.keypress(1);
mediator.keypress(1);

