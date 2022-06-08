"use strict";

const searchRoutes = require('../routes/search');
const indexRoutes = require('../routes/health');
// const bookingRoutes = require('../routes/booking');

const configureRoutes = (app) => {

    app.use('/', indexRoutes)
    app.use('/api/search', searchRoutes);
    // app.use('/api/booking', bookingRoutes);

    //catch 404 and respond accordingly
    app.use(function (req, res, next) {
        res.status(404).send({ error: 'Not found' })
    });
}


module.exports = { configureRoutes };