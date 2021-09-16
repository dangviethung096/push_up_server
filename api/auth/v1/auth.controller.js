const response = require('../../response/http.response');
const HttpCode = response.HTTP_CODE;
const AuthService = require('../auth.service');
const tracer = require('../../../log/tracer');

const login = async (req, res, next) => {
    tracer.info(`[login] ${req.body.username}`);
    response.ResSuccess({
        res,
        code: response.HTTP_CODE.OK,
        data: {
            username: req.body.username,
            token: req.token,
        },
    })
}

const register = async (req, res, next) => {
    tracer.info(`[register]`);

    AuthService.insertNewAccount(req.body);
    response.ResSuccess({
        res,
        code: response.HTTP_CODE.CREATED,
        data: {
            status: 'success'
        }
    });
}

module.exports = {
    login,
    register,
}