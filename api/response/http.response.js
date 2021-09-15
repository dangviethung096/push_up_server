let Response = {
    HTTP_CODE: {
        OK: 200,
        CREATED: 201,
        BAD_REQUEST: 400,
    }
};

const ResSuccess = (resInfo) => {
    resInfo.res.status(resInfo.code).json(resInfo.data);
}

Response.ResSuccess = ResSuccess;

module.exports = Response;