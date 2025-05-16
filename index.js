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

app.get('/api/usuario', (req, res) => {
  res.json({
    nome: 'João',
    idade: 25,
    email: 'joao@teste.com'
  });
});

app.get('/api/protudo1', (req, res) => {
  res.json({
    id: 1,
    nome: 'sapato1',
    preco: 300,00,
    descricao: 'sapato'
  });
});

app.get('/api/produto2', (req, res) => {
  res.json({
    id: 2,
    nome: 'sapato2',
    preco: 150.00,
    descricao: 'sapato'
  });
});

app.get('/api/produto3', (req, res) => {
  res.json({
    id: 3,
    nome: 'calça preta',
    preco: 320.00,
    descricao: 'calça'
  });
});

app.get('/api/produto4', (req, res) => {
  res.json({
    id: 4,
    nome: 'calça azul',
    preco: 200.00,
    descricao: 'calça'
  });
});

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});