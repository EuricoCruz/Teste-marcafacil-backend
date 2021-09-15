const pgPool = require('../data/index-pg'); 
const { middlewaresAutenticacao } = require('../usuarios');
const controladorCadastro = require('./cadastro-controlador');


module.exports = app => {
  app
    .route('/cadastro')
    .get((req, res) => {
			res.send('Olá, tela de cadastro!');
		})
		.post(middlewaresAutenticacao.bearer, controladorCadastro.adiciona);

};