const express = require('express');
const { userController } = require('./controllers');
const validaEmailSenha = require('./middlewares/validaEmailSenha');
const validaNewUser = require('./middlewares/validaNewUser');
const validaToken = require('./middlewares/validaToken');

const routes = express.Router();

routes.post('/login', validaEmailSenha, userController.doLogin);

routes.post('/user', validaNewUser, userController.createNewUser);

routes.get('/user', validaToken, userController.getUsers);

module.exports = routes;
