/**
 * Created by rajeshs on 1/23/2015.
 */
angular.module("todo")
    .filter("todoFilter", function(){
        return function(todo, criteria){
            console.log("filering using todoFilter " + todo + "  " + criteria);
            return true;

                /*if(criteria === 'all') return true;
                if(criteria === 'completed') {
                    if(todo.completed) {
                        return true;
                    } else {
                        return false;
                    }
                }
                if (criteria === 'active') {
                    if(todo.completed) {
                        return false;
                    } else {
                        return true;
                    }
                }
                return false;*/


        } ;

    });