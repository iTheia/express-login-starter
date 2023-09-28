const Joi = require('joi');
const validateUser = require('./validateUser.js')
const validatePassword = require('./validatePassword.js')
const encryption = require('./bcryptUtils.js')


function postLogin(req, res) {
    res.sendStatus(200)
}

function postRegister(req, res) {
    const user = req.body.user;
    const password = req.body.password;

    const verifyPassword = new validatePassword(password, Joi);
    const verifyUser = new validateUser(user, Joi);

    if (password !== verifyPassword.validate()) {
        res.send(verifyPassword.validate())
    }

    if (user !== verifyUser.validate()) {
        res.send(verifyUser.validate())
    }

    const saltRounds = 10;

    const hash = encryption(saltRounds, verifyPassword.validate());

    res.sendStatus(200)

}

module.exports = {
    postLogin,
    postRegister
}