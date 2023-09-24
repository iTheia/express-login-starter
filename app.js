const bodyParser = require('body-parser');
const expres = require('express');
const router = require('./router');
const config = require('./config');

const app = expres();

app.use(bodyParser.json());

router(app);

app.listen(config.PORT, () => {
  console.log(`app started at port ${config.PORT}`);
});
