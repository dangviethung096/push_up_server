let jwt = require('jsonwebtoken');
let fs = require('fs');
let tracer = require('../../log/tracer');
let expiration = process.env.EXPIRATION || 60 * 60 * 24 * 365;
let bcrypt = require('bcrypt');
let AuthService = require('./auth.service');
let ErrorCode = require('../error/code.error');
const { pick } = require('lodash');

function generateToken(req, res, next) {
    tracer.info(`[generateToken] ${JSON.stringify(req.inputValue)}`);
    let privateKeyBuff = fs.readFileSync(process.cwd() + '/keys/key.pem');
    let inputValue = req.inputValue;
    let expireTime = Math.floor(new Date() / 1000) + expiration;

    let token = jwt.sign({ value: inputValue, exp: expireTime }, privateKeyBuff, { algorithm: "RS256" });
    req.token = token;

    next();
}

function authUserToken(req, res, next) {
    tracer.info(`[authUserToken]`);
    let token = getTokenHeader(req);

    let privateKeyBuff = fs.readFileSync(process.cwd() + '/keys/cert.pem');
    jwt.verify(token, privateKeyBuff, { algorithm: "RS256" }, (error, payload) => {
        if (error) {
            return next(ErrorCode.WRONG_USERNAME_OR_PASSWORD);
        }

        req.user = payload.value;
        return next();
    });
}

function getTokenHeader(req) {
    let token = undefined;
    let authString = req.header('Authorization');
    if (authString.startsWith('Bearer')) {
        token = authString.substring(7).trim();
    }

    return token;
}

async function checkPassword(req, res, next) {
    tracer.info(`[checkPassword]`);
    let password = req.body.password;
    let username = req.body.username;
    let user = await AuthService.findUserByUsername(username);

    if (!bcrypt.compareSync(password, user.password)) {
        return next(ErrorCode.WRONG_USERNAME_OR_PASSWORD);
    }

    req.user = pick(user, ["_id", "username"]);

    req.inputValue = req.user;
    return next();

}

module.exports = {
    generateToken,
    authUserToken,
    checkPassword,
}