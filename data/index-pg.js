const {Pool, Client} = require('pg');

const pgPool = new Pool ({ 
    host: 'localhost',
    user: 'mercafacil',     
    password: 'mercafacil',
    database: 'mercafacil',
    port: "5432"

});



module.exports = pgPool;