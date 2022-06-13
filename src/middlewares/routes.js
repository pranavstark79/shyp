"use strict";

const searchRoutes = require('../routes/search');
const userRoutes = require('../routes/user');
const indexRoutes = require('../routes/health');
const paymentRoutes = require('../routes/payment');
const bookingRoutes = require('../routes/booking');

const configureRoutes = (app) => {

    app.use('/', indexRoutes)
    app.use('/api/search', searchRoutes);
    app.use('/api/user', userRoutes);
    app.use('/api/payment', paymentRoutes);
    app.use('/api/booking', bookingRoutes);

    //catch 404 and respond accordingly
    app.use(function (req, res, next) {
        res.status(404).send({ error: 'Not found' })
    });
}


module.exports = { configureRoutes };