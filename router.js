module.exports = function (app) {

  app.post('/login',(req,res) => {
    const userLogin = req.body
    res.sendStatus(200)
  })

  app.post('/register',(req,res) => {
    const user = req.body.user
    const password = req.body.password

    res.sendStatus(200)
  })

  app.use((req, res) => {
    res.status(404).send('This route it is not being supported yet!');
  });
};
