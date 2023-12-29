const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String
    },
    lastName: String,
    email: {
        type: String
    },
    password: String
}, {
    timestamps: true
});

module.exports.UserModel = mongoose.model('user', UserSchema);