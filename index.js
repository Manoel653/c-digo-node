const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Teste');
});

app.get('/about', (req, res) => {
  res.send('Teste 2');
});

app.get('/features', (req, res) => {
  res.send('Teste 3');
});

app.get('/contact', (req, res) => {
  res.send('Teste 4');
});

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});
