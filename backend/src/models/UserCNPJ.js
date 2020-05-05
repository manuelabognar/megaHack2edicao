const mongoose = require('mongoose')

const UserSchemaCNPJ = new mongoose.Schema({
	email: String,
	cnpj: Number,
	cep: Number,
	city: String,
	uf: String,
	street: String,
	home_number: Number,
	password: String
})

module.exports = mongoose.model('UserCNPJ', UserSchemaCNPJ)