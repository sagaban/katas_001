/*global describe, it */
'use strict';

(function () {
    describe('Kata String Calculator', function () {
        describe('Created a simple String calculator with a method int Add(string numbers)', function () {
            it('should return 0 for the empty string', function () {
                expect(calculator.add("")).toEqual(0);
            });
        });
    });
})();
