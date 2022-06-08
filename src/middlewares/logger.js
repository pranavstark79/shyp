"use strict"
var appRoot = require('app-root-path');
const winston = require("winston");
const isProduction = process.env.PRODUCTION ? true : false;

const logFormat = winston.format.printf((info) => {
    if(info.stack) return `${new Date().toISOString()} - ${info.level}: ${info.message, info.stack}`;
    return `${new Date().toISOString()} - ${info.level}: ${info.message}`;
});

const winstonLogOptions = {
  file: {
    level: 'info',
    filename: `${appRoot}/logs/app.log`,
    handleExceptions: true,
    json: true,
    maxsize: 5242880,
    maxFiles: 5,
    colorize: false,
  },
  console: {
    level: 'debug',
    format: winston.format.combine(winston.format.colorize(), logFormat),
    handleExceptions: true,
    json: false,
    colorize: true,
    silent: isProduction
  },
};

const logger = winston.createLogger({
    transports: [
      new winston.transports.File(winstonLogOptions.file),
      new winston.transports.Console(winstonLogOptions.console)
    ],
    exitOnError: false,
  });
  

logger.stream = {
  write: function(message, encoding) {
    logger.info(message);
  },
};


const configureReqLogger = (app) => {
    function logRequest(req, res, next) {
        if(!req.url.startsWith(`/api-docs`)){
            logger.info(`${req.method}: ${req.url}`);
        }
        next();
    }
    app.use(logRequest);
}


const configureErrorLogger = (app) => {
    function logError(err, req, res, next){
        logger.error(err);
        next(err)
    }
    app.use(logError);
}


module.exports = {
    logger,
    configureReqLogger,
    configureErrorLogger
}