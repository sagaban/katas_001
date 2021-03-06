/*global describe, it */
'use strict';

(function () {
    describe('Kata String Calculator', function () {
        describe('Created a simple String calculator with a method int Add(string numbers)', function () {
            it('should return 0 for the empty string', function () {
                expect(calculator.add("")).toEqual(0);
            });
            it('should return the number past as parameter', function () {
                expect(calculator.add("3")).toEqual(3);
                expect(calculator.add("4")).toEqual(4);
            });
            it('should return the sum of the numbers past as parameter', function () {
                expect(calculator.add("3,2")).toEqual(5);
                expect(function(){calculator.add("-2,2")}).toThrow();
                expect(function(){calculator.add("-5,-1")}).toThrow();
            });

            it('should return the sum of ANY numbers past as parameter', function () {
                expect(function(){calculator.add("-5,-1,12")}).toThrow();
                expect(calculator.add("1,2,3")).toEqual(6);
                expect(calculator.add("0,2,3")).toEqual(5);
            });
            it('should be able to use "," or \\n', function () {
                expect(function(){calculator.add("-5\n-1,12")}).toThrow();
                expect(calculator.add("1,2\n3")).toEqual(6);
                expect(calculator.add("0\n2\n3")).toEqual(5);
            });

            it('The string calculator should support different delimiters', function () {
                expect(calculator.add("//;\n1;2")).toEqual(3);
                expect(calculator.add("//*\n4*5*5")).toEqual(14);
                expect(calculator.add("//$\n1$2$7")).toEqual(10);
            });
        });
    });
})();
