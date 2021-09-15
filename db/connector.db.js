const mongoose = require('mongoose');
const tracer = require('../log/tracer');

async function connectDb() {
    const url = process.env.DB_URL || 'mongodb://127.0.0.1:27017/pushup';
    const connection = await mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    tracer.info('Connected to Db: ' + url);
}


module.exports = connectDb;
