const express = require('express');
const route = express.Router();
const ActivityController = require('./activity.controller');
const ActivityValidator = require('../activity.validator');
const ActivityMiddleware = require('../activity.middleware');

route
    .use('/add', ActivityMiddleware.processAdd);

route.post('/add/push_up',
    ActivityValidator.checkAddPushUp,
    ActivityController.addPushUpActivity)
    .post('/add/plank', ActivityController.addPlankActivity);




module.exports = route;