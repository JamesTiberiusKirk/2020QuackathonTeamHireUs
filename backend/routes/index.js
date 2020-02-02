const express = require('express');
const conn = require('../db/db');
const router = express.Router();


router.get('/test', (req, res)=>{
    let sql = 'SELECT 2+2 AS answer;';
    conn.query(sql, (error, result)=>{
        if (error) return console.log(error)
        res.send(result);
    })
});


router.get('/countries', (req, res)=>{
    let s_query = req.query.s_query;
    console.log(s_query)
    if (!s_query) return res.status(400).send('Provide a search parameter');
    
    let sql = `SELECT * FROM Country WHERE CName LIKE "%${s_query}%";`;
    conn.query(sql, (error, result)=>{
        if (error) return res.status(500).send(error);
        res.status(200).send(result);
    });
});

router.get('/cases', (req, res)=>{
    let country = req.query.country;
    if (!country) return res.status(400).send('Provide a key');

    let sql = `SELECT * FROM Cases WHERE CountryID="${country}";`;
    conn.query(sql, (error, result)=>{
        if (error) return res.status(500).send(error);
        res.status(200).send(result);
    });
});


module.exports = router;