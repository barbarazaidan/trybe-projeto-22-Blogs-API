const express = require('express');
const { userController } = require('../controllers');
const validaNewUser = require('../middlewares/validaNewUser');
const validaToken = require('../middlewares/validaToken');

const userRouter = express.Router();

userRouter.post('/', validaNewUser, userController.createNewUser);

userRouter.get('/', validaToken, userController.getUsers);

userRouter.get('/:id', validaToken, userController.getUserById);

module.exports = userRouter;
