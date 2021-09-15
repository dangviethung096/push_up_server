const response = require('../response/http.response');

class ErrorHandler {
    handle(error, req, res, next) {
        response.ResError(error);
    }
}

module.exports = ErrorHandler;