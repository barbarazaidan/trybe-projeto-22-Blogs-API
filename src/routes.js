const express = require('express');
const { loginController } = require('./controllers');
const validaEmailSenha = require('./middlewares/validaEmailSenha');
const validaNewUser = require('./utils/validaNewUser');

const routes = express.Router();

routes.post('/login', validaEmailSenha, loginController.doLogin);

routes.post('/user', validaNewUser, loginController.createNewUser);

module.exports = routes;
