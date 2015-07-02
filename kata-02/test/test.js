require('chai').should();

var FizzBuzz = require("../lib/fizzbuzz.js")
describe('FizzBuzz', function(){
    it('should exist', function(){
        FizzBuzz.should.be;
    });

    it("should return Fizz when input mod 3 equals 0", function(){
        FizzBuzz(3).should.be('Fizz');
    });
});