module.exports = function (app) {

  app.get("/register", (req, res) =>{
    const data = req.body
    
    res.send(result)
  })

  app.use((req, res) => {
    res.status(404).send('This route it is not being supported yet!');
  });
};
