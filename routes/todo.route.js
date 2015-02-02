/**
 * Created by rajeshs on 1/28/2015.
 */

var todos = require('../controllers/todo.controller');

module.exports = function(app){
    app.route('/api/todos')
        .get(todos.list)
        .post(todos.create);

    app.route('/api/todos/:todoId')
        .get(todos.read)
        .put(todos.update)
        .delete(todos.delete);

    app.param('todoId', todos.todoById);
}

