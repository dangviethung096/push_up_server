const express = require('express');
const route = express.Router();
const AuthController = require('./auth.controller');
const AuthValidator = require('../auth.validation');

route
    .post('/login', AuthController.login)
    .post('/register',
        AuthValidator.checkRegisterBodyV1,
        AuthController.register);

module.exports = route;