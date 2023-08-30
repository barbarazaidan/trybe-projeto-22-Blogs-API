/**
 *
 * @param {import('sequelize').Sequelize} sequelize
 * @param {import('sequelize').DataTypes} DataTypes
 */

const userModel = (sequelize, DataTypes) => {
  const userTable = sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      displayName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      image: DataTypes.STRING,
    },
    {
      underscored: true,
      /*o timestamps é false, pois não estou usando os campos criados automaticamente pelo Sequelize,
        que são o createdAt e updatedAt
        */
      timestamps: false,
      tableName: "users",
    }
  );

  userTable.associate = (models) => {
    userTable.hasMany(models.BlogPost, {
      foreignKey: "userId",
      as: "posts",
    });
  };

  return userTable;
};

module.exports = userModel;
