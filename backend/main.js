const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const serverConf = require('./config/config').server;

const app = express();
console.log(serverConf)

app.use(cors());
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.status(200).send('OK');
});

app.listen(serverConf.port, () => console.log(`Portfolio-backend listening on port ${serverConf.port}!`));
