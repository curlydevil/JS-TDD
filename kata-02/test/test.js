require('chai').should();

var FizzBuzz = require("../lib/fizzbuzz.js")
describe('FizzBuzz', function(){
    it('should exist', function(){
        FizzBuzz.should.be;
    });

    it("should return Fizz when input mod 3 == 0", function(){
        FizzBuzz(3).should.equal('Fizz');
        FizzBuzz(6).should.equal('Fizz');
    });

    it("should return Buzz when input mod 5 == 0", function(){
        FizzBuzz(5).should.equal('Buzz');
        FizzBuzz(10).should.equal('Buzz');
    });

    it("should return Fizz Buzz when input mod 5 == 0 and input mod 3 == 0", function(){
        FizzBuzz(15).should.equal('Fizz Buzz');
    });

    it("should return input in all other cases", function(){
        FizzBuzz(2).should.equal(2);
        FizzBuzz(7).should.equal(7);
    });
});