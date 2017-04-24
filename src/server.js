'use strict';

module.exports = function(confs, mongoose, restify) {

    var server = restify.createServer();
    server.use(restify.acceptParser(server.acceptable));
    server.use(restify.bodyParser());
    server.use(restify.queryParser());

    var mongooseConnect = function() {
        mongoose.connect(confs.dbUri);
    }

    var mongooseFailManage = function(err) {
        confs.dbTries--;
        console.error("Error: " + err);
        if (confs.dbTries <= 0) {
            console.error("Emergency: Can't connect on " + confs.dbUri);
            process.exit(1);
        }
        console.log('Info: Trying again in ' + confs.dbTriesSleep + '...');
        setTimeout(mongooseConnect, confs.dbTriesSleep);
    }

    var serverStart = function() {
        server.listen(confs.port, function () {
            console.log("Info: Server started! :" + confs.port);
        });
    }

    server.run = function() {
        mongoose.connection.on('connected', serverStart);
        mongoose.connection.on('error', mongooseFailManage);
        mongooseConnect();
    }

    return server;
}
