const Account = require('../../db/model/account.model');
const tracer = require('../../log/tracer');

const insertNewAccount = async (accountInfo) => {
    tracer.info(`[insertNewAccount] ${JSON.stringify(accountInfo)}`);
    let newAccount = new Account();
    newAccount.username = accountInfo.username;
    newAccount.password = accountInfo.password;

    newAccount.save();
}

const findUserByUsername = async (username) => {
    tracer.info(`[findUserByUsername] ${username}`);
    let user = Account.findOne({
        username: username
    });

    return user;
}

module.exports = {
    insertNewAccount,
    findUserByUsername,
}