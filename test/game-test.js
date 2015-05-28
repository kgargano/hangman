var assert = require("should");
var Game = require("../src/js/game.js").Game;

describe('Game', function(){
    describe("When a game is created", function(){
        var game;
        before(function(){
            game = new Game();
        });

        it('should exist', function(){
            game.should.exist;
        });

        it('should have a secret', function(){
            game.should.have.property("secret");
        });

        it('should not be started', function(){
            game.should.have.property("isActive");
            game.isActive.should.equal(false);
        });
    });
});

