'use strict';

// Dependencies
var mongoose = require('mongoose');
var restify = require('restify');

// App
var confs = require(__dirname + '/src/confs')();
var models = require(__dirname + '/src/models')(mongoose);
var controllers = require(__dirname + '/src/controllers')(models);
var server = require(__dirname + '/src/server')(confs, mongoose, restify);
var routes = require(__dirname + '/src/routes')(server, controllers);

// Run
server.run();
