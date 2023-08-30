const { Category } = require('../models');

const createNewCategory = (name) =>
    Category.create({ name });

const getCategories = () => Category.findAll();

module.exports = {
    createNewCategory,
    getCategories,
};