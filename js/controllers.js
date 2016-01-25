(function () {
    angular
        .module('testApp')
        .controller('mainController', mainController);

    mainController.$inject = ['$scope', 'parser'];   //inject $scope and factory in to controller

    function mainController($scope, parser) {
        $scope.palindromes = null;            //set scope palindromes equal null
        $scope.test = test;                   //set function by click button

        function test() {                     //describe test function
            if (!$scope.string) {             //check input for contains value
                return;
            }
            $scope.palindromes = parser($scope.string);  //set scope palindromes equal result factory function "parser"

        }

    }

})();
