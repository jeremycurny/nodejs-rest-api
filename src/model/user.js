'use strict';

module.exports = function(mongoose) {

    return mongoose.model('User', new mongoose.Schema({
        email: { type: String, required: true},
        password: { type: String, required: true}
    }));

}
