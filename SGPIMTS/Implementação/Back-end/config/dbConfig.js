const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());

const db = mysql.createPool({
    host: "193.203.175.84",
    user: "u721539099_sigeps",
    password: "/XVQ+y6T[y4",
    database: "u721539099_SIGEPS"
});

app.get('/clientes', (req, res) => {
    db.query("SELECT * FROM Clientes", (error, results) => {
        if (error) {
            return res.json(error)
        }
        res.json(results);
    });
});

const PORT = process.env.PORT || 5173;

app.listen(PORT, () => {
    console.log(`Rodando na porta ${PORT}`);
});


