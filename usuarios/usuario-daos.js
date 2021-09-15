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
					} catch (erro) {
						reject(erro);
					}
				});

	}, 

  buscaPorId: (id) => {
		return new Promise((resolve, reject) => {
					let sql = `SELECT * FROM users WHERE id = ?`;
					try {
							connSQL.query(sql, id, (err, results, fields) => {
							if(!results.length) reject('Usuário não encontrado');
							if (err) reject(err.message);
							resolve(results[0]);
						})
					} catch (erro) {
						reject(erro);
					}
				});
				
	}, 
		

	alimentaBaseDeUsuarios: async (res) => {
		try {
			let sql = `INSERT INTO users(nome,senha) VALUES(?,?)`;
			let macapa = ['Macapa', '12345'];
			let varejao = ['Varejão', '12345'];
			await connSQL.query(sql, macapa, (err, results, fields) => {
				if (err) {
					return console.error(err.message);
				}
			});
			await connSQL.query(sql, varejao, (err, results, fields) => {
				if (err) {
					return console.error(err.message);
				}
				connSQL.end();
				res.status(201).json('usuários inseridos com sucesso')
			});
		} catch (erro) {
			console.log(erro.message)
		}
	}

}