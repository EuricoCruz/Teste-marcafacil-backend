const UsuariosControlador = require('./usuarios-controlador');
const UsuarioDaos = require('./usuario-daos');
const middlewaresAutenticacao = require('./middlewares-autenticacao');

module.exports = app => {
	app
		.route('/user/seed')
		.post(async (req, res) => {
				await UsuarioDaos.alimentaBaseDeUsuarios(res);
		})	
  app
    .route('/login')
    .get((req, res) => {
			res.send('Olá, tela de login!');
		})
		.post(middlewaresAutenticacao.local,
					UsuariosControlador.login);
};