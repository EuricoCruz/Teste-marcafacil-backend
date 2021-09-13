const passport = require('passport');

module.exports = {
	local: (req, res, next) => {
	 passport.authenticate('local', 
	 { session :  false}, 
	 (erro, usuario, info) => {
		 if (erro) {
			 res.status(401).json({erro : erro.message})
		 } 

		 if (erro) {
			 res.status(500).json(erro)
		 }

		 if(!usuario){
			 res.status(401).json()
		 }
		 req.user =  usuario;
		 return next();
	 }) (req, res, next); 
	}, 

	bearer: (req, res, next) => {
		passport.authenticate('bearer', 
		{session:false}, 
		(erro, usuario, info) => {
			if (erro && erro.name === 'JsonWebTokenError') {
				res.status(401).json(erro.message)
			}

		if(erro && erro.name === 'TokenExpiredError') {
			 res.status(401).json({erro: erro.message, expiradoEm: erro.expiredAt })
		 }

			if(erro) {
				res.status(500).json(erro)
			}

			if(!usuario) {
				res.status(401).json()
			}
			

			req.token = info.token;
			req.user = usuario;
			return next();
		}) (req, res, next)

	},

}