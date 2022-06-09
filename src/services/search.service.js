"use strict"
const { Routes } = require('../sequelize/models');
const { Op } = require('sequelize');

const search = async (source, destination, boardingTime) => {
    try {

        const queryObj = {
            where: {
                source,
                destination
            },
            include: ['buses']
        };

        if (boardingTime) {
            const ISOBoardingTime = new Date(parseInt(boardingTime) * 1000).toISOString();
            queryObj.where["boardingTime"] = {
                [Op.gte]: ISOBoardingTime
            }
        }

        const data = await Routes.findAll(queryObj);
        return data;

    } catch (error) {
        console.log(error);
    }
}


module.exports = {
    search
}