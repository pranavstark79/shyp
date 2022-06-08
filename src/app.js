"use strict"

const express = require("express");
const { logger, configureErrorLogger, configureReqLogger } = require("./middlewares/logger");
const { configureRoutes } = require("./middlewares/routes");
const app = express();

configureReqLogger(app);
configureErrorLogger(app);
configureRoutes(app);

logger.info('Backend API initialized.');

module.exports = app;