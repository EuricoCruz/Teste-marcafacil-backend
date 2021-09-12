module.exports = app => {
  app
    .route('/cadastro')
    .get((req, res) => {
			res.send('Olá, tela de cadastro!')
		})
		.post((req, res) => {
			const nome = req.body.nome
			const contato = req.body.contato 
			console.log({nome, contato })
			res.send('requisição aqui')
		})
};