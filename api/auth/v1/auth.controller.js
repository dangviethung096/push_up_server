const response = require('../../response/http.response');
const HttpCode = response.HTTP_CODE;

const login = async (req, res, next) => {
    response.ResSuccess({
        res,
        code: response.HTTP_CODE.OK,
        data: {
            username: req.body.username
        },
    })
}

const register = async (req, res, next) => {
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