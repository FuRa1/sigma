(function () {
    'use strict';
    angular
        .module('testApp')
        .factory('parser', parser);

    function parser() {
        var palindromes = [];
        var maxPalindromeLength = 3;

        function parse(string) {
            if (string.length > maxPalindromeLength - 1) {
                for (var i = string.length - 1; i >= maxPalindromeLength - 1; i--) {
                    if (string[0] === string[i]) {
                        var newString = string.slice(0, i + 1);
                        var newStringReverse = newString.split('').reverse().join('');
                        if (newString === newStringReverse) {
                            palindromes.push(newString);
                            parse(string.slice(1, string.length)); //starts new loop with catted string
                            return; //ends current loop
                        }
                    } else if (i === maxPalindromeLength - 1) {
                        parse(string.slice(1, string.length));
                        return;
                    }
                }
            }
        }

        function sort() {
            return palindromes.sort(function (a, b) {
                return b.length - a.length;
            });
        }

        return function run(text) {
            palindromes = [];
            parse(text);
            return sort();
        }
    }
})
();