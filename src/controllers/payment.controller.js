'use strict'

const paymentService = require('../services/payment.service');
const { logger } = require("./middlewares/logger");

const addPaymentDetail = async (req, res) => {

    const { userId, mode, cardNumber, expiry, cvv } = req.body;
    const paymentId = await paymentService.addPaymentDetail(userId, mode, cardNumber, expiry, cvv);

    if (!paymentId) logger.error({ errorId: 11, message: 'errorOccured while adding payment' });
    
    if (paymentId) {
        res.status(200).send({
            statusCode: 200, status: 'success', data: {
                paymentId
            }
        })
    } else {
        res.status(500).send({
            statusCode: 500, status: 'error', data: {
                errorId: 09
            }
        })
    }
};


module.exports = {
    addPaymentDetail
};