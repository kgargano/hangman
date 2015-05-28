var assert = require("assert");
var Sum = require("../src/js/sum.js");

console.log(Sum);
describe('Sum', function(){
        it('should return the sum when given two values', function(){
            assert.equal(10, Sum.sum(5,5));
        });
});