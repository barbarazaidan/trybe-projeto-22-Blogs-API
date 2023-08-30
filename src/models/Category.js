/**
 * @param {import('sequelize').Sequelize} sequelize
 * @param {import('sequelize').DataTypes} DataTypes
 */

const categoryModel = (sequelize, DataTypes) => {
  const categoryTable = sequelize.define(
    "Category",
    {
      id: {
        allowNull: false,
        primaryKey: true,
        // quando não coloco aqui o autoIncrement: true, o id vem como null ao inserir uma nova categoria no banco
        autoIncrement: true,
        type: DataTypes.INTEGER,
      },
      name: DataTypes.STRING,
    },
    {
      timestamps: false,
      tableName: "categories",
      underscored: true,
    }
  );

  return categoryTable;
};

module.exports = categoryModel;
