const bodyParser = require('body-parser');
const express = require('express');
const router = require('./router');
const config = require('./config');

const app = express();

app.use(bodyParser.json());

router(app);

app.listen(config.PORT, () => {
  console.log(`app started at port ${config.PORT}`);
});
