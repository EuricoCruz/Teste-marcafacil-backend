const UsuariosControlador = require('./usuarios-controlador');
const UsuarioDaos = require('./usuario-daos')

module.exports = app => {
	app
		.route('/user/seed')
		.post(async (req, res) => {
				await UsuarioDaos.AlimentaBaseDeUsuarios(res)
		})	
  app
    .route('/login')
    .get((req, res) => {
			res.send('Olá, tela de login!')
		})
		.post(async (req, res) => {
				const { nome, senha } = req.body;
				UsuarioDaos.buscaPorNome(nome, senha, res)
		})
};