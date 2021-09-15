const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const accountSchema = Schema({
    username: String,
    password: String,
});

module.exports = accountSchema;