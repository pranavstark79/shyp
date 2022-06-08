"use strict"

const searchService = require('../services/searchService');

const search = async (req, res) => {
    try {
        const { vehicleTypeId, source, destination, startTime } = req.query;
        const data = await searchService.search(vehicleTypeId, source, destination, startTime);
        res.status(200).send({ status: 'success', data });
    } catch (error) {
        res.status(500).send({ status: 'error' });
    }
};


module.exports = {
    search
}