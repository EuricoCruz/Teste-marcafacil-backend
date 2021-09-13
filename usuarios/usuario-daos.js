const connSQL = require('../data/index-sql.js'); 

module.exports = {
  buscaPorNome: async (nome, senha, res) => {
		let sql = `SELECT * FROM users WHERE nome = ?`;
			
		await connSQL.query(sql, nome, (err, results, fields) => {
				console.log(results[0])
				res.json(results[0])	
		})
  },

	AlimentaBaseDeUsuarios: async (res) => {
		try {
			let sql = `INSERT INTO users(nome,senha) VALUES(?,?)`
			let macapa = ['Macapa', '12345']
			let varejao = ['Varejao', '12345']
			await connSQL.query(sql, macapa, (err, results, fields) => {
				if (err) {
					return console.error(err.message);
				}
  		console.log(' Id:' + results.insertId);
			});
			await connSQL.query(sql, varejao, (err, results, fields) => {
				if (err) {
					return console.error(err.message);
				}
  		console.log('User Id:' + results.insertId);
				res.status(201).json('usuários inseridos com sucesso')
			});
			connSQL.end()
		} catch (erro) {
			console.log(erro.message)
		}
	}

}