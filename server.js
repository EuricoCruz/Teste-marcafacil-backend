require('dotenv').config()

const app = require('./app')

const routes = require('./rotas');
routes(app);

app.listen(process.env.PORT, () => console.log(`App listening on port ${process.env.PORT}`));