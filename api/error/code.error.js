const HttpCode = require('../response/http.response').HTTP_CODE;

const BASE_ERROR_CODE = 1000;
const AUTH_ERROR_CODE = 100;


module.exports = {
    // Auth error code
    MISSING_FIELD_IN_REQUEST: {
        errorCode: BASE_ERROR_CODE + 1,
        httpCode: HttpCode.BAD_REQUEST,
        message: "Missing field",
    },
    EXIST_USER: {
        errorCode: BASE_ERROR_CODE + 2,
        httpCode: HttpCode.BAD_REQUEST,
        message: "Username is exist",
    },
    WRONG_USERNAME_OR_PASSWORD: {
        errorCode: BASE_ERROR_CODE + 3,
        httpCode: HttpCode.BAD_REQUEST,
        message: "Wrong username or password",
    },
    WRONG_TOKEN_OR_TOKEN_IS_EXPIRED: {
        errorCode: BASE_ERROR_CODE + 4,
        httpCode: HttpCode.BAD_REQUEST,
        message: "Wrong token or token is expired",
    }
}