var mongoose = require('mongoose');


var User = mongoose.model('User', {
    name: {
        type: String,
        minlength: 1,
        trim: true
    },
    email: {
        type: String,
        required: true,
        minlength: 5,
        trim: true
    }
});

module.exports = {User};