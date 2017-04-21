'use strict';

module.exports = function(server, controllers) {

    require(__dirname + '/route/user')(server, controllers);

}
