const cadastro = require('./cadastro');
const usuarios = require('./usuarios');

module.exports = app => {
  app.get('/', (req, res) => {res.send('Olá pessoa!')});
  cadastro.rotas(app);
  usuarios.rotas(app);
};