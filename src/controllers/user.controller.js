'use strict'

const userService = require('../services/user.service');

const createUser = async (req, res) => {
    console.log('createuser....',req);

    const { name, age, phone, email, address } = req.body;
    console.log( name, age, phone, email, address );
    const userId = await userService.createUser(name, age, phone, email, address);
    
    if (userId) {
        res.status(200).send({
            statusCode: 200, status: 'success', data: {
                userId
            }
        })
    } else {
        res.status(500).send({
            statusCode: 500, status: 'error', data: {
                errorId: 11
            }
        })
    }
};


module.exports = {
    createUser
};