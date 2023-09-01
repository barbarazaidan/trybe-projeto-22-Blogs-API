const { blogPostService } = require('../services');

const createNewPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const { payload } = req;

  const isSomeCategoryNotFound = await blogPostService.validaCategoryIds(categoryIds);

  if (isSomeCategoryNotFound) {
    return res
      .status(400)
      .json({ message: 'one or more "categoryIds" not found' });
  }

  const newPost = await blogPostService.createNewPost({
    title,
    content,
    userId: payload.id,
    categoryIds,
    updated: new Date(),
    published: new Date(),
  });

  return res.status(201).json(newPost);
};

const getPosts = async (req, res) => {
  const posts = await blogPostService.getPosts();

  res.status(200).json(posts);
};

const getPostById = async (req, res) => {
  const { id } = req.params;

  const post = await blogPostService.getPostById(id);

  if (!post) {
    return res.status(404).json({ message: 'Post does not exist' });
  }

  return res.status(200).json(post);
};

module.exports = {
  createNewPost,
  getPosts,
  getPostById,
};
