const mongoose = require('mongoose')

const UserSchemaCPF = new mongoose.Schema({
	email: String,
	cpf: Number,
	cep: Number,
	city: String,
	uf: String,
	street: String,
	home_number: Number,
	password: String
})

module.exports = mongoose.model('UserCPF', UserSchemaCPF)