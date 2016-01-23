describe('parserTest', function () {
    var parser;

    beforeEach(function(){
        module('testApp');
    });

    beforeEach(inject(function ($injector) {
        parser = $injector.get('parser');
    }));

    it('should always return an array', function () {
        var result = parser();

        expect(result).toBeArray();
    });

    it('is there are no palindromes should return an empty array', function () {
        var result = parser();

    });

    it('"aaasssaaa" should contain 5 palindromes', function () {
        var result = parser('aaasssaaa');

        expect(result).toContain('aaasssaaa');
    });

    it('firs element should have maximal length', function () {
        var result = parser('aaasssaaa');

        expect(result[0] > result[1]).toBe(true);
    });

});