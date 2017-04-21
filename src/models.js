'use strict';

module.exports = function(mongoose) {

    return {
        user: require(__dirname + '/model/user')(mongoose)
    }

}
