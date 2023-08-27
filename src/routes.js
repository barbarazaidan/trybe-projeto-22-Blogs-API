const express = require('express');
const { loginController } = require('./controllers');
const validaEmailSenha = require('./middlewares/validaEmailSenha');

const routes = express.Router();

routes.post('/login', validaEmailSenha, loginController.doLogin);

module.exports = routes;
