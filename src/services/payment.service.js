'use strict'

const { Payments } = require('../sequelize/models');
const { Transactions } = require('../sequelize/models');

const addPaymentDetail = async (userId, mode, cardNumber, expiry, cvv) => {
    console.log(userId,mode, cardNumber, expiry, cvv);
    const existingPaymentInfo = await Payments.findOne({where:{userId, mode, cardNumber, cvv}});
    if(existingPaymentInfo && existingPaymentInfo.id){
        return existingPaymentInfo.id;
    } 
    const paymentCreatedRes = await Payments.create({userId, mode, cardNumber, expiry, cvv});
    return paymentCreatedRes.id;
}


const processPayment = async (userId, mode, amount) => {

    const paymentDetails = await Payments.findOne({
        where: {
            userId,
            mode
        }
    });

    console.log("____----____", JSON.stringify(paymentDetails));

    if(Object.keys(paymentDetails).length > 0){

        const paymentResponse = await new Promise((resolve, reject) => {
            setTimeout(() => {
                const isPaymentSuccess = Math.round(Math.random() * 10) % 2 === 0 ? true : false;
                if(isPaymentSuccess){
                    resolve({isPaymentSuccess: true,  amount})
                } else {
                    reject({isPaymentSuccess: false});
                }
            }, 1000);
        });

        const {isPaymentSuccess} = paymentResponse;


        console.log("isPaymentSuccess",isPaymentSuccess);

        const paymentInsertObj = {
            userId,
            amount,
            paymentSourceId: paymentDetails.id,
            paymentMode: mode,
            status: isPaymentSuccess ? 'success' : 'failed' 
        }        
        const insertResponse = await Transactions.create(paymentInsertObj);
        
        if(insertResponse && isPaymentSuccess){ 
            return {
                status: 'success',
                data: { isPaymentSuccess }
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