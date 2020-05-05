const express = require('express');

// Rotas
const routes = express.Router();

// Uplaod de arquivo (futura implementação)
//const multer = require('multer');

// Config para envio de arquivos (futura implementação)
//const uploadArchive = require('./config/upload');
//const upload = multer(uploadArchive);

// Models
const RegisterUserCPF = require('./controllers/RegisterControllerCPF');
const RegisterUserCNPJ = require('./controllers/RegisterControllerCNPJ');
const SessionControllerCPF = require('./controllers/SessionControllerCPF');
const SessionControllerCNPJ = require('./controllers/SessionControllerCNPJ');

//// Rotas
routes.post('/api/session/cartorio', SessionControllerCNPJ.store);                    // Login                [X]
routes.post('/api/session/solicitante', SessionControllerCPF.store);                  // Login                [X]
routes.post('/api/register/user/cartorio', RegisterUserCNPJ.store);                   // Cadastro             [X]
routes.post('/api/register/user/solicitante', RegisterUserCPF.store);                 // Cadastro             [X]
//routes.get('/api/cartorio/search/:file_id/archive', SessionControllerCNPJ.index);   // Busca matrícula CNPJ [#]
//routes.get('/api/solicitante/search/:file_id/archive', SessionControllerCPF.index); // Busca matrícula CPF  [#]

// Rota para envio de arquivos (futura implementação)
//routes.post('/api/send/archive', upload.single('archive'), SpotController.store);

module.exports = routes;