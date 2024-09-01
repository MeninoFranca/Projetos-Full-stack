const express = require("express");
const router = express.Router();
const db = require('../config/dbConfig');

router.get('/clientes', (req, res) => {
    db.query("select * from Clientes", (error, results) => {
        if (error) {
            return res.json(error);
        }
        res.json(results);
    });
});

module.exports = router;
