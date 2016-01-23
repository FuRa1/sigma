(function () {
    angular
        .module('testApp')
        .controller('mainController', mainController);

    mainController.$inject = ['$scope', 'parser'];

    function mainController($scope, parser) {
        $scope.palindromes = null;
        $scope.test = test;

        function test() {
            if (!$scope.string) {
                return;
            }
            $scope.palindromes = parser($scope.string);

        }

    }

})();
