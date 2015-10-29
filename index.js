angular.module('F1FeederApp', []).
controller('driversController', function($scope) {
    $scope.budget = 250000.00
    $scope.contributed = 34569.23
    $scope.percentage = 100 * ($scope.contributed / $scope.budget)
});