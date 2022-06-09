'use strict'

const allowedBookingTimeGap = 30 * 60 * 1000; //30 mins
const { Buses, Routes } = require('../sequelize/models');

const initBooking = (userId, busId, bookingDetails) => {

    const busData = await Buses.find({
        raw: true,
        attributes: ['availableSeats', 'routeId'],
        where: {
            id: busId
        }
    });


    console.log("==>", busData);
    const {availableSeats, routeId} = busData;
    const routeData = await Routes.findOne({id: routeId});
    const {boardingTime} = routeData;
    
    const currentTime = (new Date()).valueOf();
    let boardingTime = new Date(boardingTime).valueOf(); 
    
    if((boardingTime - currentTime) < allowedBookingTimeGap){
        return {
            success: 'false',
            errorCode: 15,
            message: 'Seat booking is not allowed as less than 30 minutes left in boardingTime'
        }
    }

    if(availableSeats > 0){

    } else {
        return {
            success: 'false',
            errorCode: 14,
            message: 'All seats are already booked, booking can not be processed'
        }
    }

    const bookingAmount = calculateOrderAmout(bookingDetails);
    const processPayment(userId, )
    

    function calculateOrderAmout(userId, bookingDetails){

    }
}


module.exports = {
    initBooking
};