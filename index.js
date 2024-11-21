const express = require('express');
const app = express();
const PORT = 8094;

app.get('/', (req, res) => {
    res.send('Olá, Kauê!');
});

app.listen(PORT, () => {
    console.log(`O servidor está rodando na porta: ${PORT}`);
});
