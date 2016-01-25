(function () {
    'use strict';
    angular
        .module('testApp')
        .factory('parser', parser);

    function parser() {                                                                 //main function
        var palindromes = [];                                                           //create empty palindrome array
        var maxPalindromeLength = 3;                                                    //set min palindrome length

        function parse(string) {                                                        //got string value for check
            if (string.length > maxPalindromeLength - 1) {                              //check length to be more than min
                for (var i = string.length - 1; i >= maxPalindromeLength - 1; i--) {    //star loop to compare first letter
                    if (string[0] === string[i]) {                                      //with lasts to reach min length
                        var newString = string.slice(0, i + 1);                         //create new string with last letter matched
                        var newStringReverse = newString.split('').reverse().join('');  //create reversed new sting
                        if (newString === newStringReverse) {                           //compare new string with reversed new string
                            palindromes.push(newString);                                //if statement is true, push new palindrome in array
                            parse(string.slice(1, string.length));                      //starts new loop with catted first letter in old string
                            return;                                                     //ends current loop
                        }
                    } else if (i === maxPalindromeLength - 1) {                         //if no matches before loop reached min value
                        parse(string.slice(1, string.length));                          //start new loop with catted first letter in string
                        return;                                                         //ends current loop
                    }
                }
            }
        }

        function sort() {                                                               //sort array elements by length
            return palindromes.sort(function (a, b) {                                   //return sorted array
                return b.length - a.length;
            });
        }

        return function run(text) {                                                     //run new string test
            palindromes = [];                                                           //erase palindrome array
            parse(text);                                                                //parse string for palindromes
            return sort();                                                              //return sorted palindromes array
        }
    }
})
();