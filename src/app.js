"use strict"

const express = require("express");
const bodyParser = require('body-parser');
const { logger, configureErrorLogger, configureReqLogger } = require("./middlewares/logger");
const { configureRoutes } = require("./middlewares/routes");
const app = express();


app.use(express.json());
configureReqLogger(app);
configureErrorLogger(app);
configureRoutes(app);


logger.info('Backend API initialized.');

module.exports = app;