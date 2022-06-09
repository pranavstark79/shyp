'use strict'

const { Payments } = require('../sequelize/models');
const { Transactions } = require('../sequelize');
const crypto = require("crypto");

const addPaymentDetail = async (userId, mode, cardNumber, expiry, cvv) => {
    const isExits = await Payments.findOne({userId, mode, cardNumber, cvv});

    if(isExits) return true;
    
    const response = await Payments.create({userId, mode, cardNumber, expiry, cvv});
    return true;
}


const processPayment = async (userId, mode) => {

    const paymentDetails = await Payments.find({
        where: {
            userId,
            paymentMode: mode
        }
    });

    if(paymentDetails){

        const paymentResponse = await new Promise((resolve, reject) => {
            const paymentId = crypto.randomBytes(16).toString("hex");
            setTimeout(() => {
                const isPaymentSuccess = Math.round(Math.random() * 10) % 2 === 0 ? true : false;
                if(isPaymentSuccess){
                    resolve({isPaymentSuccess: true, paymentId})
                } else {
                    reject({isPaymentSuccess: false, paymentId: null});
                }
            }, 1000);
        });

        const {isPaymentSuccess, paymentId} = paymentResponse;

        const paymentInsertObj = {
            userId,
            paymentMode: mode,
            isPaymentSuccess,
            paymentId
        }        
        const insertResponse = await Transactions.insert(paymentInsertObj);
        
        if(insertResponse && isPaymentSuccess){ 
            return {
                status: 'success',
                data: { isPaymentSuccess,  paymentId }
            } 
        } else {
            return {
                status: 'failed',
                data: {
                    errorCode: 13,
                    message: 'Invalid payment details'
                }
            }
        }
    } else {
        return {
           status: 'failed',
           data: {
               errorCode: 12,
               message: 'No Payment Details is provided'
           } 
        }
    }
}

const processRefund = async (userId, paymentId) => {
    const paymentDetails = await Payments.findOne({paymentId});
    if(paymentDetails){

    } else {
        return {
            success: false,
            errorCode: 21,
            message: 'Invalid paymentId, refund processing is failed'
        }
    }
};

module.exports = {
    addPaymentDetail,
    processPayment,
    processRefund
}