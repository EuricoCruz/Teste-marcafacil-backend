const pgPool = require('../data/index-pg'); 

module.exports = app => {
  app
    .route('/cadastro')
    .get((req, res) => {
			res.send('Olá, tela de cadastro!')
		})
		.post(async (req, res) => {		
			let sql = 'INSERT INTO contacts(nome,celular) VALUES ($1,$2)';
			let nome = 'eurico';
			let celular = '5541990355873';
      let values = [nome,celular]

			try {
				const resultado = await pgPool.query(sql, values)
				console.log(resultado.rows[0])
				res.status(201).json('deu certo')

			} catch (err) {
				console.log(err.stack)
			}
		})

};