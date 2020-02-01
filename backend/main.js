const express = require('express');
const bodyParser = require('body-parser');
const serverConf = require('./config/config').server;
const router = require('./routes/index');

const app = express();

function log(req, res) {
    console.log(`[${req.method}] ${req.url}`);
 }

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, HEAD, OPTIONS, PUT, PATCH, DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token, x-refresh-token, _id');
    res.header('Access-Control-Expose-Headers', 'x-access-token, x-refresh-token');
    log(req, res);
    next();
  });

// app.use(bodyParser.json());

app.use('/', router);

app.listen(serverConf.port, () => console.log(`Virus Visual backend listening on port ${serverConf.port}!`));
