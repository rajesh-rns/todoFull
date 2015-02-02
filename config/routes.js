/**
 * Created by rajeshs on 1/28/2015.
 */

module.exports = function(app){

    require('../routes/todo.route')(app);

    app.use('/api/*', function(req, resp, next){
        resp.json({'error':'No such Service present'}, 404);
    });

    app.use('*', function(req, resp, next){
        resp.send('<html><body><h1>404 Page Not Found</h1></body></html>');
    });

}