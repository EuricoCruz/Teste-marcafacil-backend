const mysql = require('mysql')

const connSQL = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'mercafacil', 
	database: 'mercafacil'
})

module.exports = connSQL


