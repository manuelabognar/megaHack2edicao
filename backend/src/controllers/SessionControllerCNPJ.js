const UserCNPJ = require('../models/UserCNPJ')

module.exports = {
	async store(req, res) {
		const { email, password } = req.body;

		let user = await UserCNPJ.findOne({ email, password });

		if (!user) {
			return res.json({
				message: 'Desculpe, usuário não encontrado.'
			});
		}

		if (user.password !== password) {
			return res.json({
				message: 'Desculpe, email ou senha incorreta.'
			});
		}

		return res.json(user);
	}
}