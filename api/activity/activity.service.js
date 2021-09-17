const Activity = require('../../db/model/activity.model');
const tracer = require('../../log/tracer');
const ActivityType = require('./activity.type');
const PushUpType = require('./sub_activity_type/push_up.type');

const addPushUpActivity = async (activityInfo) => {
    tracer.info(`[addPushUpActivity] username = ${activityInfo.user.username}`);
    let newActivity = new Activity();
    newActivity.userId = activityInfo.user._id;
    newActivity.typeActivity = {
        exerciseType: ActivityType.PUSH_UP,
        subExerciseType: activityInfo.pushUpInfo.typePushUp,
    }
    newActivity.evaluator = {
        count: activityInfo.pushUpInfo.number,
    }

    newActivity.save();
}

module.exports = {
    addPushUpActivity,
}