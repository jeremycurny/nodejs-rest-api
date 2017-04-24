'use strict';

module.exports = function() {

    return {
        dbUri: 'mongodb://localhost:2701/node-rest-api',
        dbTries: 3,
        dbTriesSleep: 5000,

        port: 7477
    }

}
