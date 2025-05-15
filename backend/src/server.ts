import app from './app';

const PORT = process.env.PORT || 5432;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});