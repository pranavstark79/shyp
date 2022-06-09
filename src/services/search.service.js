"use strict"
const { Routes } = require('../sequelize/models');
const { Op } = require('sequelize');

const search = async (source, destination, boardingTime) => {
    try {
        const ISOBoardingTime = new Date(parseInt(boardingTime) * 1000).toISOString();
        const data = await Routes.findAll({
            where: {
                source,
                destination,
                boardingTime: {
                    [Op.gte]: ISOBoardingTime
                }
            },
            include: ['buses']
        });
        return data;
        
    } catch (error) {
        throw new Error(error);
    }
}


module.exports = {
    search
}