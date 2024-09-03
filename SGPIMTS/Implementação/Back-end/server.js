const express = require('express');
const cors = require('cors');
const routes = require('./routes/userRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/', routes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
