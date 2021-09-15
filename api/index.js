const express = require('express');

const app = express();
const port = process.env.PORT || 3000;
const tracer = require('../log/tracer');
const AuthRoute = require('./auth/v1/auth.route');
const ErrorHandler = require('./error/handler.error');

app.use(express.json());

app.use("/auth", AuthRoute);

app.use(ErrorHandler);

module.exports = () => {
    app.listen(port, () => {
        tracer.info(`--------------------------Start server with ${port}----------------------------`);
    });
};
