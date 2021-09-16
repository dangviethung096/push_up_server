const AccountSchema = require('../schema/account.schema');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = process.env.SALT_ROUNDS || 8;
const tracer = require('../../log/tracer');

AccountSchema.pre('save', async function (next) {
    tracer.info(`[pre-Save AccountSchema]`);
    let account = this;
    if (account.isModified('password')) {
        let hashPass = await bcrypt.hash(account.password, saltRounds);
        account.password = hashPass;
    }

    next();
});

const Account = mongoose.model('account', AccountSchema);

module.exports = Account;