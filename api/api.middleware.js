const tracer = require('../log/tracer');

const logRequest = async (req, res, next) => {
    tracer.info(`[logRequest] ${JSON.stringify(req.body)}`);
}

module.exports = {

}