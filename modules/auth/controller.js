
const { hash } = require('bcrypt');
const { encryption, existPassword } = require('./bcryptUtils.js')
const { validateRegister, userExist } = require('./validation.js')
const { usersDatabase } = require('./repository.js')
const jwt = require('jsonwebtoken');

async function postLogin(req, res) {

    try {

        const validatedPayload = await validateRegister({ user: req.body.user });

        const match = await existPassword(req.body.password, req.body.user, usersDatabase);


        if (!match) {
            return res.send("Password is not correct")
        }

    } catch (error) {
        return res.status(400).send(error);
    }

    var jwt = require('jsonwebtoken');
    var token = jwt.sign({ user: validatedPayload }, "Password is not correct");

    return res.send(token)
}

async function postRegister(req, res) {

    if (userExist(usersDatabase, req.body.user)) {
        return res.send("Username already exist")
    }

    try {

        const validatedPayload = await validateRegister({ user: req.body.user, password: req.body.password })

        if (!(req.body.password === req.body.passwordConfirm ? true : false)) {
            return res.send("passwords are not the same")
        }

        const SALT_ROUNDS = 10;
        const hash = await encryption(SALT_ROUNDS, validatedPayload.password);

        usersDatabase.push({ user: req.body.user, hash: hash })

    } catch (error) {
        return res.status(400).send(error);
    }

    return res.sendStatus(200)
}

module.exports = {
    postLogin,
    postRegister
}