const express = require('express');
const route = express.Router();
const AuthController = require('./auth.controller');

route
    .post('/login', AuthController.login);

module.exports = route;