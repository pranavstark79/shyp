'use strict'

const { Users } = require('../sequelize/models');

const createUser = async (name, age, phone, email, address) => {
    const existingUserData = await Users.findOne({
        where: {
            email
        }
    });

    if (existingUserData && existingUserData.id) {
        return {
            userId: existingUserData.id
        }
    } else {
        const userData = await Users.create({ name, age, phone, email, address });
        const { id: userId } = userData;
        return { userId };
    }

};


const findUser = async (userId) => {
    const userData = await Users.findOne({
        where: {
            id: userId
        },
        include: ['payments']
    });
    return userData;
}

module.exports = {
    createUser,
    findUser
}