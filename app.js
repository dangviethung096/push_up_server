const initExpressHttpServer = require('./api/index');
const connectDb = require('./db/connector.db');

connectDb();
initExpressHttpServer();