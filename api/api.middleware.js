const tracer = require('../log/tracer');
const Validator = require('../lib/validator');

const logRequest = async (req, res, next) => {
    tracer.info(`[logRequest] ${req.method} ${req.originalUrl}`);
    if (!Validator.isObjectEmpty(req.params)) {
        tracer.info(`[logRequest] params = ${req.params}`);
    }

    if (!Validator.isObjectEmpty(req.query)) {
        tracer.info(`[logRequest] query = ${req.query}`);
    }
    next();
}

module.exports = {
    logRequest,
}