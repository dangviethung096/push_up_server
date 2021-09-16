const mongoose = require('mongoose');
const ActivitySchema = require('../schema/activity.schema');


const ActivityModel = mongoose.model('activity', ActivitySchema);

module.exports = ActivityModel;