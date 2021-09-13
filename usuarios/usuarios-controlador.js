const jwt = require('jsonwebtoken')

function criaTokenJWT(usuario) {
  const payload = {
    id: usuario.id 
  }

  const token = jwt.sign(payload, process.env.CHAVE_JWT, {expiresIn: '15m'})

  return token;

}


module.exports = {
  login: (req, res) => {
    const token = criaTokenJWT(req.user);
    res.set('Authorization', token)
    res.status(204).send();
  },
}