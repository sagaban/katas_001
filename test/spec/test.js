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
            });
            it('should return the sum of the numbers past as parameter', function () {
                expect(calculator.add("3,2")).toEqual(5);
            });
        });
    });
})();
