/**
 * Created by rajeshs on 1/28/2015.
 */
var PORT = 3000;

var db = require('./config/db')();
var app = require("./config/express")();

require('./config/routes')(app);

app.listen(PORT, function() {
    console.log("Application is running on http://localhost:" + PORT);
});

/*
app.listen('3000');
console.log('Listening on port 3000');
 */