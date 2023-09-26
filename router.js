module.exports = function (app) {

  app.post('/login',(req,res) => {
    const userLogin = req.body
    res.sendStatus(200)
  })

  app.post('/register',(req,res) => {
    const userRegister = req.body
    res.sendStatus(200)
  })

  app.use((req, res) => {
    res.status(404).send('This route it is not being supported yet!');
  });
};
