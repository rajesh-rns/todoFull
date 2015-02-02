/**
 * Created by rajeshs on 1/23/2015.
 */
angular.module("todo")
.controller("MainCtrl", ["$scope", "TodoService", function($scope, TodoService){
        $scope.todos = TodoService.todos;

        $scope.criteria = TodoService.criteria;

        $scope.add = function () {
            TodoService.add($scope.newtodo);
            $scope.newtodo = {};
        };

        $scope.delete = function(item) {
            TodoService.delete(item);
        };

        $scope.clearCompleted = function() {
            TodoService.clearCompleted();
        };

        $scope.update = function(item) {
            TodoService.update(item);
        };

        $scope.$watch('$viewContentLoaded', function(){
            TodoService.get();
        });

    }]);
