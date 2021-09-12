const pg = require('pg');

const config = {
    host: 'localhost',
    user: 'root',     
    password: 'mercafacil',
    database: 'mercafacil',
    port: 5432,
    ssl: true
};

const pgClient = new pg.Client(config);

module.exports = pgClient;