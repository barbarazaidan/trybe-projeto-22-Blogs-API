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

module.exports = {
  createNewPost,
};
