var assert = require("should");
var Game = require("../src/js/game.js");

describe('Game', function(){
    describe("Game Creation", function(){
        var game;
        before(function(){
            game = Game.create();
        });
        it('should create the game when invoked', function(){
            game.should.exist;
        });

        it('should have a secret when the game is created', function(){
            game.should.have.property("secret");
        });
    });
});

