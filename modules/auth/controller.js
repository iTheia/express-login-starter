const Joi = require('joi');
const validateUser = require('./validateUser.js')
const validatePassword = require('./validatePassword.js')
const bcrypt = require("bcrypt")

function postLogin(req, res) {
    const userLogin = req.body


    res.sendStatus(200)
}

function postRegister() {
    const user = req.body.user
    const password = req.body.password

    const verifyPassword = new validatePassword(password, Joi)
    const verifyUser = new validateUser(user, Joi)

    const saltRounds = 10


    bcrypt
        .genSalt(saltRounds)
        .then(salt => {
            console.log('Salt: ', salt)
            return bcrypt.hash(verifyPassword, salt)
        })
        .then(hash => {
            console.log('Hash: ', hash)
        })
        .catch(err => console.error(err.message))


    res.sendStatus(200)
}
