const UsuarioDaos = require('./usuario-daos');
const jwt = require('jsonwebtoken')

function criaTokenJWT(usuario) {
  const payload = {
    id: usuario.id 
  };

  const token = jwt.sign(payload, process.env.CHAVE_JWT, {expiresIn: '15m'});

  return token;

};


module.exports = {
  login: async (req, res) => {
    try {
      const user = req.user;
      const token = criaTokenJWT(req.user);
      res.set('Authorization', token);
      res.status(201).json(user);
    } catch (erro) {
      console.log(erro);
    }

  },
};