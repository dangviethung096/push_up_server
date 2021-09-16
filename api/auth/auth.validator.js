const Validator = require('../../lib/validator');
const ErrorCode = require('../error/code.error');
const tracer = require('../../log/tracer');
const AuthService = require('./auth.service');
const { pick } = require('lodash');

const checkLoginBodyV1 = async (req, res, next) => {
    let isExist = Validator.checkField(req.body, ['username', 'password']);
    if (!isExist) {
        next();
    }
}

const checkRegisterBodyV1 = async (req, res, next) => {
    tracer.info(`[checkRegisterBodyV1]`);
    const fields = ['username', 'password'];
    let isExist = Validator.checkField(req.body, fields);
    if (!isExist) {
        return next(ErrorCode.MISSING_FIELD_IN_REQUEST);
    }

    return next();
}

const checkExistUsername = async (req, res, next) => {
    tracer.info(`[checkExistUsername]`);
    let username = req.body.username;
    let user = await AuthService.findUserByUsername(username);

    if (!!user) {
        return next(ErrorCode.EXIST_USER);
    }

    return next();
}

module.exports = {
    checkLoginBodyV1,
    checkRegisterBodyV1,
    checkExistUsername,
}