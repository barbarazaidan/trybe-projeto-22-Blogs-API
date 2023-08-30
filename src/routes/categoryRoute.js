const express = require('express');
const { categoryController } = require('../controllers');
const validaToken = require('../middlewares/validaToken');

const categoryRouter = express.Router();

categoryRouter.post('/', validaToken, categoryController.createNewCategory);

categoryRouter.get('/', validaToken, categoryController.getCategories);

module.exports = categoryRouter;