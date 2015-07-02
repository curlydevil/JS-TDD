require('chai').should();

var FizzBuzz = require("../lib/fizzbuzz.js")
describe('FizzBuzz', function(){
    it('should exist', function(){
        FizzBuzz.should.be;
    });

    it("should return Fizz when input mod 3 == 0", function(){
        FizzBuzz(3).should.equal('Fizz');
    });
    it("should return Buzz when input mod 5 == 0", function(){
        FizzBuzz(3).should.equal('Buzz');
    });
});