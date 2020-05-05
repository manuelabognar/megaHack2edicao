const User = require('../models/UserCPF');

module.exports = {
    async store(req, res) {

        const { 
            email,
            cpf,
            cep,
            city,
            uf,
            street,
            home_number,
            password
        } = req.body;

        const userExist = await User.findOne({
            email: email,
            cpf: cpf,
        });

        if (userExist) {
            return res.json({
                message: 'Usuário já existe em nosso sistema'
            });
        }

        const registerUser = await User.create({
            email,
            cpf,
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