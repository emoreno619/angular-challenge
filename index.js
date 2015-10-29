angular.module('BudgetApp', []).
controller('moneyController', function($scope) {
    $scope.budget = 250000.00
    $scope.contributed = 0.00
    $scope.percentage = 100 * ($scope.contributed / $scope.budget)
    $scope.toolVisible = false


    $scope.add = function(){
      if(parseFloat($scope.donation)){
        $scope.contributed += parseFloat($scope.donation)
        $scope.percentage = 100 * ($scope.contributed / $scope.budget)
      }
    }

    $scope.showTool = function(){
      if($scope.toolVisible){
        $scope.toolVisible = !$scope.toolVisible
      } else {
        $scope.toolVisible = !$scope.toolVisible
      }
    }
});