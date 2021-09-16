const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const accountSchema = Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
});

module.exports = accountSchema;