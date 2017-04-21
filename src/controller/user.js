'use strict';

module.exports = function(models) {

    return {
        find: function (req, res, next) {
            models.user.find(function (err, data) {
                res.send(data);
                return next();
            });
        }
    }

}
