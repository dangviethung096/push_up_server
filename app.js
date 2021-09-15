const initExpressHttpServer = require('./api/app.js');
const connectDb = require('./db/connector.db');

connectDb();
initExpressHttpServer();