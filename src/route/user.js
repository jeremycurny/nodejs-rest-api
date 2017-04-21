'use strict';

module.exports = function(server, controllers) {

    server.get("/users", function (req, res, next) {
        return controllers.user.find(req, res, next);
    });

}
