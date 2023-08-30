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
        /*
        quando não defino o allowNull e o autoIncrement, ao criar um novo usuário, o retorno que tenho é
        com um id inicialmente nulo, aí preciso fazer uns ajustes no controller
        */
        allowNull: false,
        autoIncrement: true,
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
