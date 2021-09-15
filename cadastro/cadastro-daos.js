const connSQL = require('../data/index-sql'); 
const pgPool = require('../data/index-pg');

module.exports = {
  inserirContatoMacapa: (contato) => {
		return new Promise((resolve, reject) => {
					let sql = `INSERT INTO contacts(nome,celular) VALUES(?,?)`;
					try {
							let nome = contato.name.toUpperCase();
							let celular = contato.cellphone.replace(/^(\d{2})(\d{2})(\d{5})(\d{4}).*/, '+$1 ($2) $3-$4');
							contato = [nome, celular];
							connSQL.query(sql, contato, (err, results, fields) => {
							if (err) reject(err.message);
							resolve();
						})
					} catch (err) {
						reject(err);
					}
				});

	}, 

  inserirContatoVarejao: (contato) => {
		return new Promise((resolve, reject) => {
					let text = `INSERT INTO contacts(nome,celular) VALUES ($1,$2)`;
					try {
							let nome = contato.name;
							let celular = contato.cellphone;
							contato = [nome, celular];
							pgPool.query(text, contato, (err, results, fields) => {
							if (err) reject(err.message);
							resolve();
						})
					} catch (err) {
						reject(err);
					}
				});
	}, 

}