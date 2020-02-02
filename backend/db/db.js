const mysql = require('mysql');
const creds = require('../config/config').db_creds;

var conn = mysql.createConnection(creds);

conn.connect((err)=>{
    if (err) throw err;
    console.log('Database connection made...');
});


module.exports=conn;