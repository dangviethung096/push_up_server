const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const tracer = require('../log/tracer');
const AuthRoute = require('./auth/v1/auth.route');
const ErrorHandler = require('./error/handler.error');
const ApiMiddleware = require('./api.middleware');
const ActivityRoute = require('./activity/v1/activity.route');
const AuthMiddleware = require('./auth/auth.middleware');

app.use(express.json());

app.use(ApiMiddleware.logRequest);

app.use("/v1/auth", AuthRoute);
app.use("/v1/activity", AuthMiddleware.authUserToken, ActivityRoute);

app.use(ErrorHandler.handle);

module.exports = () => {
    app.listen(port, () => {
        tracer.info(`--------------------------Start server with ${port}----------------------------`);
    });
};
