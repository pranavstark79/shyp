'use strict'

const { User } = require('../sequelize/models');

const createUser = async (name, age, phone, email, address) => {
    try {
        const isUserExists = await User.findOne({ email });
        if (isUserExists) {
            return { userId }
        } else {
            const userData = await User.create({ name, age, phone, email, address });
            console.log("userData", userData);
            return { userId };
        }

    } catch (error) {
        throw new Error(error);
    }
};

module.exports = {
    createUser
}