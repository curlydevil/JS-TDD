describe("String calculator", function(){

    var StringCalc = require("../lib/StringCalc.js");

    it("should exist", function(){
        expect(StringCalc).toBeTruthy();
    });
    
    it("should return some value", function(){
        expect(StringCalc()).toBeDefined();
    });

    it("should return 0 when input is ''", function(){
        expect(StringCalc('')).toEqual(0);
    });
});