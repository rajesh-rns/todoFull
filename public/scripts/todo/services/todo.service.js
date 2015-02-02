/**
 * Created by rajeshs on 1/23/2015.
 */

angular.module("todo")
    .service("TodoService", ["$http", function($http) {

        var service = {};

        service.todos = [],

        service.criteria = 'all',

        service.add = function(newtodo){
            $http.post('/api/todos', newtodo).success(function(result){
                emptyArray();
                service.get();
            });
        },

        service.get = function(){
          $http.get("/api/todos").success(function(result){
              result.forEach(function(item, index){
                  service.todos.push(item);
              });
          })  ;
        },

        service.delete = function(item){
            $http.delete('/api/todos/'+ item._id).success(function(result){
                emptyArray();
                service.get();
            });
        },

        service.update = function(item){
            $http.put('/api/todos/'+ item._id, item).success(function(result){
                emptyArray();
                service.get();
            });
        },

        service.clearCompleted = function(){
            this.todos.forEach(function(item) {
                if(item.completed) {
                    service.delete(item);
                }
            });
        }

        var emptyArray = function(){
            while(service.todos.length > 0) {
                service.todos.pop();
            }
        };

        return service;

}]);
