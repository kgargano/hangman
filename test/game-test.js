var assert = require("assert");
var Game = require("../src/js/game.js");

describe('Game', function(){
    describe("Game Creation", function(){
        it('should create the game when invoked', function(){
            var game = Game.create();
            assert.notEqual(null, game);
        });
    });
});

