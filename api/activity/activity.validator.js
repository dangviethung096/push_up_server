const Validator = require('../../lib/validator');
const tracer = require('../../log/tracer');
const ErrorCode = require('../error/code.error');

const checkAddPushUp = (req, res, next) => {
    tracer.info(`[checkAddPushUp]`);
    const fields = ['number', 'typePushUp'];
    if (!Validator.checkField(req.body, fields)) {
        return next(ErrorCode.MISSING_FIELD_IN_REQUEST);
    }

    return next();
}

module.exports = {
    checkAddPushUp,
}