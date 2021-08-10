var express = require('express');
var app = express();
app.use(require('./logger'));
app.get('/', (req, res) => {
  res.status(200).send('hello world');
});
app.listen(3000);
