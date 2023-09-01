const express = require('express');
const { blogPostController } = require('../controllers');
const validaToken = require('../middlewares/validaToken');
const validaNewPost = require('../middlewares/validaNewPost');

const blogPostRouter = express.Router();

blogPostRouter.post('/', validaToken, validaNewPost, blogPostController.createNewPost);
blogPostRouter.get('/', validaToken, blogPostController.getPosts);

module.exports = blogPostRouter;