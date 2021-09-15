const winston = require('winston');
const label = process.env.SERVICE_LABEL || 'API';

const myFormat = winston.format.printf(({ label, level, timestamp, message }) => {
    return `${label} | ${timestamp} ${level} | ${message}`;
});

const format = winston.format.combine(
    winston.format.label({ label }),
    winston.format.timestamp(),
    myFormat
);

const tracer = winston.createLogger({
    level: 'info',
    format: format,
    defaultMeta: { service: 'user-service' },
    transports: [
        new winston.transports.Console,
        new winston.transports.File({ filename: './logs/error.log', level: 'error' }),
        new winston.transports.File({ filename: './logs/combined.log' }),
    ]
});

module.exports = tracer;