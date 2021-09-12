const connSQL = require('../data/index-sql.js');


module.exports = app => {
	app
		.route('/user/seed')
		.post(async (req, res) => {
			let sql = `INSERT INTO users(nome,senha) VALUES(?,?)`
			let macapa = ['Macapa', '12345']
			let varejao = ['Varejao', '12345']
			await connSQL.query(sql, macapa, (err, results, fields) => {
				if (err) {
					return console.error(err.message);
				}
  		console.log('Todo Id:' + results.insertId);
			});
			await connSQL.query(sql, varejao, (err, results, fields) => {
				if (err) {
					return console.error(err.message);
				}
  		console.log('Todo Id:' + results.insertId);
			});
			connSQL.end()
		})	
  app
    .route('/login')
    .get((req, res) => {
			res.send('Olá, tela de login!')
		})
		.post(async (req, res) => {
			const nome = req.body.nome
			const senha = req.body.senha 
			const users = await connSQL.query('SELECT * FROM users',(err, results, fields) => {
				if (err) {
					return console.error(err.message);
				}
				res.status(201).json(results)
			});
		})
};