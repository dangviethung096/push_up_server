const errorCode = require('../../error/code.error');
const response = require('../../response/http.response');
const ResSuccess = response.ResSuccess;
const tracer = require('../../../log/tracer');

const addPushUpActivity = async (req, res, next) => {
    tracer.info(`[addPushUpActivity]`);
    
}

const addPlankActivity = async (req, res, next) => {
    tracer.info(`[addPlankActivity]`);
}

module.exports = {
    addPushUpActivity,
    addPlankActivity
}