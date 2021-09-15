const connSQL = require('../data/index-sql.js'); 

module.exports = {
  buscaPorNome: (nome) => {
		return new Promise((resolve, reject) => {
					let sql = `SELECT * FROM users WHERE nome = ?`;
					try {
							connSQL.query(sql, nome, (err, results, fields) => {
							if(!results.length) reject('Usuário não encontrado');
							if (err) reject(err.message);
							resolve(results[0]);
						})
					} catch (err) {
						reject(err);
					}
				});

	}, 
		

	alimentaBaseDeUsuarios: async (res) => {
		try {
			let sql = `INSERT INTO users(nome,senha) VALUES(?,?)`;
			let macapa = ['Macapa', '12345'];
			let varejao = ['Varejao', '12345'];
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
			connSQL.end();
		} catch (erro) {
			console.log(erro.message)
		}
	}

}