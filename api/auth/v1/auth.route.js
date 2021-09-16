const express = require('express');
const route = express.Router();
const AuthController = require('./auth.controller');
const AuthValidator = require('../auth.validator');
const AuthMiddleware = require('../auth.middleware');

route
    .post('/login',
        AuthValidator.checkRegisterBodyV1,
        AuthMiddleware.checkPassword,
        AuthMiddleware.generateToken,
        AuthController.login)
    .post('/register',
        AuthValidator.checkRegisterBodyV1,
        AuthValidator.checkExistUsername,
        AuthController.register);

module.exports = route;