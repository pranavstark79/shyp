"use strict"

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).send({statusCode: 200, status: 'success', message: 'ok'});
});

module.exports = router;