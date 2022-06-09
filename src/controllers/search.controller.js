"use strict"

const searchService = require('../services/search.service');

const search = async (req, res) => {
    try {
        const { source, destination, boardingTime } = req.query;
        const data = await searchService.search(source, destination, boardingTime);
        res.status(200).send({ status: 'success', data });
    } catch (error) {
        res.status(500).send({ statusCode: '500', status: 'error' });
    }
};


module.exports = {
    search
}