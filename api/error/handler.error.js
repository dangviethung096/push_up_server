const response = require('../response/http.response');
const tracer = require('../../log/tracer');

class ErrorHandler {
    handle(error, req, res, next) {
        tracer.info(`[handle] ${JSON.stringify(error)}`);
        response.ResError(error, res);
    }
}

let errorHandler = new ErrorHandler();
module.exports = errorHandler;