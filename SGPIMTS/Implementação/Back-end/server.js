// server.js
const express = require('express');
const cors = require('cors');
const userController = require('./controllers/userController'); 

const app = express();
app.use(cors());
app.use(express.json()); 

app.use('/', userController);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
