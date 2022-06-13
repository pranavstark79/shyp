'use strict'

const express = require('express');
const paymentController = require('../controllers/payment.controller');
const router = express.Router();

router.post('/', paymentController.addPaymentDetail);

module.exports = router;