const Validator = require('../../lib/validator');
const ErrorCode = require('../error/code.error');

const checkLoginBodyV1 = async (req, res, next) => {
    let isExist = Validator.checkField(req.body, ['username', 'password']);
    if (!isExist) {
        next();
    }
}

const checkRegisterBodyV1 = async (req, res, next) => {
    let isExist = Validator.checkField(req.body, ['username', 'password']);
    if (!isExist) {
        next(ErrorCode.MISSING_FIELD_IN_REQUEST);
    }
}

module.exports = {
    checkLoginBodyV1,
    checkRegisterBodyV1
}