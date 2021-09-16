const tracer = require('../../log/tracer');

function processAdd(req, res, next) {
    tracer.info(`[processAdd]`);
    next();
}

module.exports = {
    processAdd,
}