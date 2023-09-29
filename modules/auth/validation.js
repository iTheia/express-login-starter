
const e = require('express');
const joi = require('joi')

const registerSchema = joi.object({
    password: joi.string()
        .min(6)
        .max(12)
        .pattern(new RegExp('^[a-zA-Z0-9!@#$%^&*()_+\\-=\\[\\]{};:\'"|,.?<>\\/\\\\]{3,30}$')),
    user: joi.string()
        .min(4)
        .max(8)
        .required()
})

async function validateRegister(payload) {

    let value

    try {
        value = await registerSchema.validateAsync(payload);
    }
    catch (err) {
        return err
    }

    return value
}

function userExist(usersDatabase,userToCompare){
    let listUser = []

    for(let user of usersDatabase){
        listUser.push(user.user)
    }

    if(!listUser.includes(userToCompare)){
        return false
    }

    return true
}

module.exports = {
    validateRegister,
    userExist
}


