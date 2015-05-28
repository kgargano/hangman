var game = null;

var Game = function(){
    this.secret = null;
    this.isActive = false;
};

Game.prototype.start = function(){
    this.isActive = true;
};

module.exports = {
    Game: Game
};