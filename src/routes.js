'use strict';

module.exports = function(server, controllers) {

    return {
        user: require(__dirname + '/route/user')(server, controllers)
    }

}
