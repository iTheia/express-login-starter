
const authRouter = require('./modules/auth/router.js')

module.exports = function (app) {

  app.use('/auth', authRouter)

  app.use((req, res) => {
    res.status(404).send('This route it is not being supported yet!');
  });
};