'use strict';

module.exports = function(mongoose) {

    var userSchema = new mongoose.Schema({
        email: { type: String, required: true, lowercase: true, index: true },
        password: { type: String, required: true},
        profile: {
            nickname: { type: String, index: { unique: true } }
        }
    });

    return mongoose.model('User', userSchema);

}
