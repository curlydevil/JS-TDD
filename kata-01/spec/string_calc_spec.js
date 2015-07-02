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
       });

    });

});