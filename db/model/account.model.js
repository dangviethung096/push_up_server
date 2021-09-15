const AccountSchema = require('../schema/account.schema');
const mongoose = require('mongoose');



const Account = mongoose.model('account', AccountSchema);

module.exports = Account;