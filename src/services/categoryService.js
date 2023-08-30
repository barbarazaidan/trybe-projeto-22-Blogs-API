const { Category } = require('../models');

const createNewCategory = (name) =>
    Category.create({ name });

module.exports = {
    createNewCategory,
};