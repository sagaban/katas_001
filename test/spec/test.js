/*global describe, it */
'use strict';

(function () {
    describe('Give it some context', function () {
        describe('maybe a bit more context here', function () {
            it('should run here few assertions', function () {
                expect(1 + 2).toEqual(3);
            });
            it('check the import', function () {
                expect(hola).toEqual(2);
            });

        });
    });
})();
