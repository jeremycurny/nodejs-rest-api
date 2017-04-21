'use strict';

module.exports = function(models) {

    return {
        user: require(__dirname + '/controller/user')(models)
    }

}
