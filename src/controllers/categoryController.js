const { categoryService } = require('../services');

const createNewCategory = async (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ message: '"name" is required' });
  }

  const newCategory = await categoryService.createNewCategory(name);

  return res.status(201).json(newCategory);
};

const getCategories = async (req, res) => {
  const categories = await categoryService.getCategories();

  return res.status(200).json(categories);
};

module.exports = {
  createNewCategory,
  getCategories,
};
