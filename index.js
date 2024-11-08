const express = require('express');
const app = express();
const PORT = process.env.PORT || 8094;

app.get('/', (req, res) => {
    res.send('Olá, Mundo!');
});

app.listen(PORT, () => {
    console.log(`O servidor está rodando na porta: ${PORT}`);
});

process.on('uncaughtException', (err) => {
    console.error('Exceção não tratada:', err);
});

process.on('unhandledRejection', (reason, promise) => {
    console.error('Rejeição não tratada em:', promise, 'Motivo:', reason);
});
