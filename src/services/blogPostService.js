const { Category, BlogPost, PostCategory } = require('../models');

const validaCategoryIds = async (categoryIds) => {
  /*
  quando faço iteração com promises, no caso do findByPk, que trabalha com BD, o código não consegue esperar direito e aí a funcionalidade fica prejudicada.
  sendo assim, preciso usar o Promise.all para trabalhar corretamente.
  */

  // aqui crio um array de promises que estão buscando as categorias de categoryIds dentro do BD, para saber se elas existem.
  const categoriesInPromises = categoryIds.map((category) =>
    Category.findByPk(category));

  // aqui estou tendo acesso ao resultado da variável categoriesInPromises por meio do método Promise.all. O resultado é um array com todas as categorias encontradas ou null
  // para aquelas que não existem
  const categoriesInPromisesResolved = await Promise.all(categoriesInPromises);

  const isSomeCategoryNotFound = categoriesInPromisesResolved.some(
    (category) => category === null,
  );

  return isSomeCategoryNotFound;
};

// const createNewPost = async ({ title, content, userId, categoryIds, updated, published }) => {
//     try {
//         const result = await sequelize.transaction(async (t) => {
//             // usei o include, pois no modelo BlogPost não existe a coluna categoryId,
//             // ela aparece através da tabela PostCategory, fazendo a ligação com a tabela Category
//             const newPost = await BlogPost.create(
//               { title, content, userId, categoryIds, updated, published },
//               {
//                 include: { model: Category, as: 'categories' },
//                 transaction: t,
//               },
//             );

//             return newPost;
//         });

//         return result;
//     } catch (error) {
//         console.log(error);
//     }
// };

const createNewPost = async ({
  title,
  content,
  userId,
  updated,
  published,
  categoryIds,
}) => {  
  // aqui crio o novo post
  const newPost = await BlogPost.create(
    { title, content, userId, updated, published },
  );

  // aqui crio as novas informações para colocar na tabela PostCategory, tendo
  // o próprio id da categoria e também o id do novo post criado
  const postCategoryData = categoryIds.map((category) => (
    { categoryId: category, postId: newPost.id }
  ));

  // aqui coloco as novas informações na tabela PostCategory
  // o bulkCreate insere múltiplos registros no banco de uma vez só, recebendo como parâmetro um array
  await PostCategory.bulkCreate(postCategoryData);

  return newPost;
};

module.exports = {
  createNewPost,
  validaCategoryIds,
};
