'use strict'

const bookingService = require('../services/booking.service');

const initBooking = (req, res) => {
    const { userId, busId, bookingDetails } = req.body;
    const bookingResponse = await bookingService.initBooking(userId, busId, bookingDetails);   
    console.log("==>>>>>=>", bookingResponse);
};


module.exports = {
    initBooking
};