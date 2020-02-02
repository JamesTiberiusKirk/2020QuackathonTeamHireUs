const db_secret = require('./db.secret.js');

const config = {
    server:{
        port:3000
    },
    db_creds: db_secret
};

module.exports = config;