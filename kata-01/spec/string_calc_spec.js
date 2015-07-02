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
            expect(StringCalc('3,4')).toEqual(7);
            expect(StringCalc('-3,-4')).toEqual(-7);
            expect(StringCalc('-3,4')).toEqual(1);
        });
    });

    describe("when number is unlimited number of values with ',' as delimiter",function(){
        it("should return a sum of them", function(){
            expect(StringCalc('1,2,3,4,5,6,7,8,9')).toEqual(45);
            expect(StringCalc('-1,-2,-3,-4,-5,-6,-7,-8,-9')).toEqual(-45);
        });
    });

    describe("when delimiter is '\\n'", function(){
        it("should work", function(){
            expect(StringCalc("1\n2")).toEqual(3);
        });
    });

    describe("when custome delimiter is set by //[delimiter]\\n", function(){
        it("should work", function(){
            expect(StringCalc("//;\n1;2")).toEqual(3);
            expect(StringCalc("//;;\n1;;2")).toEqual(3);
        });
    });
});