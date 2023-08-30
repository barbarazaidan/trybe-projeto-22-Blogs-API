/**
 * @param {import('sequelize').Sequelize} sequelize
 * @param {import('sequelize').DataTypes} DataTypes
 */

const postCategoryModel = (sequelize, DataTypes) => {
  const postCategoryTable = sequelize.define(
    "PostCategory",
    // quando não especifico as chaves da tabela no Modelo, ele depende apenas do BD para fazer os processos, 
    // do jeito que eu fiz, ele já faz de antemão
    {
      postId: {
        primaryKey: true,
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      categoryId: {
        primaryKey: true,
        allowNull: false,
        type: DataTypes.INTEGER,
      },
    },
    {
      timestamps: false,
      underscored: true,
      // escrevo o nome da tabela com snakecase aqui
      tableName: "posts_categories",
    }
  );

  postCategoryTable.associate = (models) => {
    models.Category.belongsToMany(models.BlogPost, {
      as: "posts",
      foreignKey: "categoryId",
      otherKey: "postId",
      through: postCategoryTable,
    });

    models.BlogPost.belongsToMany(models.Category, {
      as: "categories",
      foreignKey: "postId",
      otherKey: "categoryId",
      through: postCategoryTable,
    });
  };

  return postCategoryTable;
};

module.exports = postCategoryModel;
