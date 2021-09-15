const express = require('express');

const app = express();
const port = process.env.PORT || 3000;
const tracer = require('../log/tracer');
const AuthRoute = require('./auth/v1/auth.route');

app.use("/auth", AuthRoute);

module.exports = () => {
    app.listen(port, () => {
        tracer.info(`--------------------------Start server with ${port}----------------------------`);
    });
};
