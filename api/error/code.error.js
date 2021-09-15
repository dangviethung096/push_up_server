const HttpCode = require('../response/http.response').HTTP_CODE;

const BASE_ERROR_CODE = 1000;
const AUTH_ERROR_CODE = 100;


module.exports = {
    // Auth error code
    MISSING_FIELD_IN_REQUEST: {
        errorCode: BASE_ERROR_CODE + 1,
        httpCode: HttpCode.BAD_REQUEST,
        message: "Missing field",
    }
}