const errorCode = require('../../error/code.error');
const response = require('../../response/http.response');
const ResSuccess = response.ResSuccess;
const HttpCode = response.HTTP_CODE;
const tracer = require('../../../log/tracer');
const ActivityService = require('../activity.service');

const addPushUpActivity = async (req, res, next) => {
    tracer.info(`[addPushUpActivity]`);
    let activityInfo = {
        pushUpInfo: req.body,
        user: req.user,
    };
    ActivityService.addPushUpActivity(activityInfo);

    ResSuccess({
        res,
        code: HttpCode.CREATED,
        data: {
            user: req.user._id,
            status: 'in progress',
        }
    })
}

const addPlankActivity = async (req, res, next) => {
    tracer.info(`[addPlankActivity]`);
}

module.exports = {
    addPushUpActivity,
    addPlankActivity
}