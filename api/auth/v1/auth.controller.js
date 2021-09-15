const response = require('../../response/http.response');

const login = async (req, res, next) => {
    response.ResSuccess({
        res,
        code: response.HTTP_CODE.OK,
        data: {
            username: req.body.username
        },
    })
}

module.exports = {
    login,
}