const { Category, BlogPost } = require('../models');

const createNewCategory = (name) =>
    Category.create({ name });

// aqui retorno todas as categorias e também os posts presentes em cada uma delas
// usando o attributes: [], quero dizer que a pesquisa não deve retornar nenhuma das chaves da tabela PostCategory
const getCategories = () => Category.findAll({ 
    include: { model: BlogPost, as: 'posts', through: { attributes: [] } },
});

module.exports = {
    createNewCategory,
    getCategories,
};