const { postLogin, postRegister } = require('./controller.js');
const { Router } = require('express');

const authRouter = Router({ mergeParams: true });

authRouter.post('/login', postLogin);
authRouter.post('/register', postRegister);

module.exports = authRouter;