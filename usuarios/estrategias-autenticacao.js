  
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const BearerStrategy = require('passport-http-bearer');
const UsuarioDaos = require('./usuario-daos');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

async function verificaSenha(senha, senhaDoUsuario) {
    const senhaEhValida = await senha === senhaDoUsuario;
    if(!senhaEhValida) throw new Error('senha ou usuário inválidos');
};


passport.use(
  new LocalStrategy(
    {
      usernameField: 'nome',
      passwordField: 'senha',
      session: false
    },
    async (nome, senha, done) => {
      try {
        const usuario = await UsuarioDaos.buscaPorNome(nome);
        await verificaSenha(senha, usuario.senha);
        done(null, usuario);
      } catch (erro) {
        console.log(erro);
      }
    }
  )
);

passport.use(
  new BearerStrategy(
    async (token, done) => {
      try {
        const payload = await jwt.verify(token, process.env.CHAVE_JWT);
        const usuario = await UsuarioDaos.buscaPorId(payload.id);
        done(null, usuario, { token: token });
      } catch (erro) {
        done(erro);
      }      
    }
  )
)
