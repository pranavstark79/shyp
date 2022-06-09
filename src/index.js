"use strict"

require("dotenv").config();
const { logger } = require("./middlewares/logger");
const { Routes, Subroutes, Buses, Stations } = require('./sequelize/models');
const forceSync = false;

let server = null;

const startServer = () => {
    try {
        const PORT = process.env.SERVER_PORT;
        const app = require('./app');
        server = app.listen(PORT, async () => {
            if (forceSync) {
                console.log(`ReSyncing Database`);
                await Routes.sync({ force: true });
                await Subroutes.sync({ force: true });
                await Buses.sync({ force: true });
                await Stations.sync({ sync: true });
            }
        });

        logger.info(`App is started at port: ${PORT}`);
    } catch (error) {
        logger.error(`Application init is failed: `, error);
    }
}

startServer();

exports.stopServer = async () => {
    await server.close();
}