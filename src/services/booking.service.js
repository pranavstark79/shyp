'use strict'

const allowedBookingTimeGap = 30 * 60 * 1000; //30 mins
const paymentService = require('../services/payment.service');
const { Buses, Routes, Bookings, Users } = require('../sequelize/models');


const initBooking = async (userId, busId, paymentMode, bookingDetails) => {

    const busData = await Buses.findOne({ raw: true, where: { id: busId }});
    const userData = await Users.findOne({ where: {id: userId}});
    const userName = userData.name;


    const { availableSeatsCapcity, routeId, fare } = busData;
    const routeData = await Routes.findOne({ where: { id: routeId }});

    // console.log("_-_-_",routeData)

    let { boardingTime, boardingPoint, droppingPoint } = routeData;

    const currentTime = (new Date()).valueOf();
    boardingTime = new Date(boardingTime).valueOf();

    // if(currentTime > boardingTime){
    //     return {
    //         success: false,
    //         errorCode: 15,
    //         message: `This Bus is already departed, Booking is not possible`
    //     }
    // }

    // if ((boardingTime - currentTime) < allowedBookingTimeGap) {
    //     return {
    //         success: 'false',
    //         errorCode: 16,
    //         message: 'Seat booking is not allowed as less than 30 minutes left in boardingTime'
    //     }
    // }
    console.log(availableSeatsCapcity);
    if (availableSeatsCapcity <= 0) {
        return {
            success: 'false',
            errorCode: 14,
            message: 'All seats are already booked, booking can not be processed'
        }
    }

    const bookingAmount = calculateOrderAmount(bookingDetails);
   
    const {status: paymentStatus} = await paymentService.processPayment(userId, paymentMode, bookingAmount);

    if(paymentStatus === 'success'){
        const bookingPromise = [];

        bookingDetails.passengerDetails.forEach((passanger) => {
            const seatNumber = availableSeatsCapcity;
            const { name, age, gender } = BookingDetails.passengerDetails
            const bookingObj = { name, age, gender, busId, seatNumber, boardingPoint, droppingPoint, fare, bookedBy: userName }
            bookingPromise.push(bookingObj);
        });

        
    }
    

    function calculateOrderAmount(bookingDetails) {
        console.log(bookingDetails);
        const { totalSeatCount } = bookingDetails;
        return fare * totalSeatCount; 
    }
}


module.exports = {
    initBooking
};