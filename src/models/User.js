/**
 * 
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 */

const userModel = (sequelize, DataTypes) => {
    const userTable = sequelize.define('User', {
        id: DataTypes.INTEGER,
        displayName: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        image: DataTypes.STRING,
    },
    {
        underscored: true,
        timestamps: false,
        tableName: 'users'
    });

    return userTable;
};

module.exports = userModel;