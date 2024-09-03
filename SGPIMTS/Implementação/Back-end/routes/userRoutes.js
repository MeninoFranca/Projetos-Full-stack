const express = require("express");
const router = express.Router();
const db = require('../config/dbConfig');

router.get('/clientes', (req, res) => {
    db.query("SELECT * FROM Clientes", (error, results) => {
        if (error) {
            return res.json(error);
        }
        res.json(results);
    });
});

router.get('/sistemas', (req, res) => {
    db.query("SELECT * FROM Sistemas", (error, results) => {
        if (error) {
            return res.json(error);
        }
        res.json(results);
    });
});

router.get('/tipo_sistema', (req, res) => {
    db.query("SELECT * FROM Tipo_Sistema", (error, results) => {
        if (error) {
            return res.json(error);
        }
        res.json(results);
    });
});

module.exports = router;
