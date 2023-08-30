const express = require('express');
const { userController } = require('../controllers');
const validaEmailSenha = require('../middlewares/validaEmailSenha');

const loginRouter = express.Router();

loginRouter.post('/', validaEmailSenha, userController.doLogin);

module.exports = loginRouter;