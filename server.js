const express = require('express');
const app = express()
const port = 3000;
const bodyParser = require('body-parser');
const connSQL = require('./data/index-sql.js');
const pgClient = require('./data/index-pg.js')

// mysql database connection

//postgres database connection

//pgClient.connect((err) => {
//         console.log("postgres conectado")
// });

app.use(bodyParser.json())

const routes = require('./rotas');
routes(app);

app.listen(port, () => console.log(`App listening on port ${port}`));