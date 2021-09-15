const cadastroDaos = require('./cadastro-daos');

function checaQualUsuario(user) {
	const usuario = user;
	return usuario

}

module.exports = {
	adiciona: async (req,res) => {
		const contatos = req.body;
		const usuario = await checaQualUsuario(req.user);
		if(!contatos.length) res.json('nenhum contato enviado para ser adicionado');

		if(usuario.nome == 'Macapa') {
			contatos.forEach(contato => {
				cadastroDaos.inserirContatoMacapa(contato);
			})
			res.json({  message: 'contatos do Macapa adicionados com sucesso'});
		}
		if(usuario.nome == 'Varejão') {
			contatos.forEach(contato => {
				cadastroDaos.inserirContatoVarejao(contato);
			})
			res.json({ message: 'contatos do Varejão adicionados com sucesso'});
		}
	}
}
