'use strict';

module.exports = function(restify) {

    var app = restify.createServer();
    app.use(restify.acceptParser(app.acceptable));
    app.use(restify.bodyParser());
    app.use(restify.queryParser());
    return app;

}
