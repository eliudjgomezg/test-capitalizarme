const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const path = require('path');
app.use(bodyParser.json())
require('dotenv').config();

app.use(express.static(path.join(__dirname, 'build')));
app.use('*', function (req, res, next) {
  if ((req.originalUrl && req.originalUrl.indexOf('/api/') === -1)) {
    let _path = path.join(__dirname, 'build', 'index.html');
    res.sendFile(_path);
  } else {
    next()
  }
})

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log('Server started');
})
