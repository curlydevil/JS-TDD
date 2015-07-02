describe("String calculator", function(){

    var StringCalc = require("../lib/StringCalc.js");

    it("should exist", function(){
        expect(StringCalc).toBeTruthy();
    });
    
    it("should return some value", function(){
        expect(StringCalc()).toBeDefined();
    });

    describe("when input is empty string", function(){
        it("should return 0", function(){
            expect(StringCalc('')).toEqual(0);
        });
    });

    describe("when input is a value as string", function(){
       it("should return same value as number", function(){
           expect(StringCalc('5')).toEqual(5);
           expect(StringCalc('4')).toEqual(4);
           expect(StringCalc('-4')).toEqual(-4);
           expect(StringCalc('0')).toEqual(0);
       });
    });

    describe("when input is a pair of values with ',' as delimiter", function(){
        it("should return sum of them", function(){
            expect(StringCalc('1,2')).toEqual(3);
        });
    });

});