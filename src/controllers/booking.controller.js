'use strict'

const { logger } = require('../middlewares/logger');
const bookingService = require('../services/booking.service');

const initBooking = async (req, res) => {
    try {
        const { userId, busId, paymentMode, bookingDetails } = req.body;
        console.log(userId, busId, paymentMode, bookingDetails);
        const bookingResponse = await bookingService.initBooking(userId, busId, paymentMode, bookingDetails);
        console.log("==>>>>>=>", bookingResponse);
    } catch (error) {
        console.log(error);
        logger.error(error.stack);
    }
};


module.exports = {
    initBooking
};