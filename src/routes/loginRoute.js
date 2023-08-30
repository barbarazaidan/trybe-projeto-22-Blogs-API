const express = require('express');
const { loginController } = require('../controllers');
const validaEmailSenha = require('../middlewares/validaEmailSenha');

const loginRouter = express.Router();

loginRouter.post('/', validaEmailSenha, loginController.doLogin);

module.exports = loginRouter;