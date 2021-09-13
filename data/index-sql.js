const mysql = require('mysql')

const connSQL = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'mercafacil', 
	database: 'mercafacil',
	port: "3306"
})

module.exports = connSQL


