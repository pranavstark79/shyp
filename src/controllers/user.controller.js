'use strict'

const userService = require('../services/user.service');

const createUser = async (req, res) => {
    try {
        const { name, age, phone, email, address } = req.body;
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
                    errorId: 11,
                    message: `error occurred while creating user`
                }
            })
        }
    } catch (error) {
        res.status(500).send({
            statusCode: 500, status: 'error', data: {
                errorId: 11,
                message: `error occurred while creating user`
            }
        })
    }

};

const findUser = async (req, res) => {
    try {
        const { id } = req.params;
        const userData = await userService.findUser(id);
        res.status(200).send({statusCode: 200, status: 'success', data: userData})
    } catch (error) {
        res.status(500).send({statusCode: 500, status: 'success'})
    }
}


module.exports = {
    createUser,
    findUser
};