const User = require('../models/UserCNPJ');

module.exports = {
    async store(req, res) {

        const { 
            email,
            cnpj,
            cep,
            city,
            uf,
            street,
            home_number,
            password
        } = req.body;

        const userExist = await User.findOne({
            email: email,
            cnpj: cnpj,
        });

        if (userExist) {
            return res.json({
                message: 'Usuário já existe em nosso sistema'
            });
        }

        const registerUser = await User.create({
            email,
            cnpj,
            cep,
            city,
            uf,
            street,
            home_number,
            password
        });

        return res.json(registerUser);
    }
};