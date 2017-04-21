// Dependencies
var mongoose = require('mongoose');
var restify = require('restify');

// DB connection
mongoose.connect('mongodb://localhost/node-rest-api');

// Models
var models = require(__dirname + '/src/models')(mongoose);

// Controllers
var controllers = require(__dirname + '/src/controllers')(models);

// Server
var server = require(__dirname + '/src/server')(restify);
server.listen(80, function () {
    console.log("server started :80");
});

// Routes
require(__dirname + '/src/routes')(server, controllers);
