  
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const BearerStrategy = require('passport-http-bearer')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

passport.use(
  new LocalStrategy(
    {
      usernameField: 'nome',
      passwordField: 'senha',
      session: false
    },
    async (nome, email, done) => {
      try {
        const usuario = await Usuario.buscaPorEmail(email);
        verificaUsuario(usuario);
        await verificaSenha(senha, usuario.senhaHash);

        done(null, usuario);
      } catch (erro) {
        done(erro);
      }
    }
  )
);
