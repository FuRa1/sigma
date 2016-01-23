require('angular-mocks.js');

describe('parserTest', function () {
    var module = angular.module('testApp', []);
    var factory;

    beforeEach(function(){
        module('testApp');
    });

    beforeEach(inject(function ($injector) {
        factory = $injector.get('parser');
    }));

    it('should always return an array', function () {


        expect(scope.palindromes.length).toBe(3);
    });

    it('is there are no palindromes should return an empty array', function () {
        var scope = {},
            ctrl = new PhoneListCtrl(scope);

        expect(scope.palindromes.length).toBe(3);
    });

    it('"aaasssaaa" should contain 3 palindromes', function () {
        var scope = {},
            ctrl = new PhoneListCtrl(scope);

        expect(scope.palindromes.length).toBe(3);
    });

    it('firs element should have maximal length', function () {
        var scope = {},
            ctrl = new PhoneListCtrl(scope);

        expect(scope.palindromes.length).toBe(3);
    });

});