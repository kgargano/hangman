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

    describe("When a game is started", function(){
        var game;
        before(function(){
            game = new Game();
            game.start();
        });

        it('should be active', function(){
            game.should.have.property("isActive", true);
        });


        it('should accept and store a secret', function(){
            var secret = "hello world";
            game.setSecret(secret);
            game.getSecret().should.equal(secret);
        });

        //it('should reject a non-alpha based secret', function(){
        //
        //});
    });

    describe("When the game is started and a secret is set", function(){
        var secret = "hello world";

        before(function(){
            game = new Game();
            game.start();
            game.setSecret(secret);
        });

        it('should accept a letter guess', function(){
            var guess = "A";
            game.guess(guess);
            game.hasBeenGuessed(guess).should.be.true;
        });

        it('should reject a previously guessed letter', function(){
            var guess = "A";
            game.guess(guess);
            game.guess.bind(null, guess).should.throw();
        });

        it('should indicate if a letter guess is valid for the secret', function(){
            var guess = "h";
            game.guess(guess).should.be.true
        });

        it('should reject a non-alpha character', function(){
            game.guess.bind(null, "3").should.throw();
        });

        it('should treat letters as case insensitive', function(){
            var guess = "H";
            game.guess(guess).should.be.true
        });

        it('should indicate if a letter guess is invalid for the secret', function(){
            var guess = "X";
            game.guess(guess).should.be.false
        });

    });
});

