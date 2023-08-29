/**
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 */

const categoryModel = (sequelize, DataTypes) => {
    const categoryTable = sequelize.define('Category', {
        id: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        name: DataTypes.STRING,
    },{
        timestamps: false,
        tableName: 'categories',
        underscored: true,
    });

    return categoryTable;
};

module.exports = categoryModel;