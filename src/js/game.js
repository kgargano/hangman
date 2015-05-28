var game = null;

var Game = function(){
    this.secret = null;
    this.isActive = false;
    this.guesses = [];
};


Game.prototype.start = function(){
    this.isActive = true;
};

Game.prototype.setSecret = function(secret){
    this.secret = secret.toLowerCase();
};

Game.prototype.getSecret = function(){
    return this.secret;
};

Game.prototype.guess = function(guess){
    guess = guess.toLowerCase();

    if(this.hasBeenGuessed(guess) || !/[a-z]/.test(guess)){
        throw new Error();
    }else {
        this.guesses.push(guess);
        return this.secret.indexOf(guess) >= 0;
    }
};

Game.prototype.hasBeenGuessed = function(guess){
    guess = guess.toLowerCase();
    return this.guesses.indexOf(guess) >= 0;
};

module.exports = {
    Game: Game
};