const { Model, DataTypes, UUIDV4 } = require('sequelize');
const sequelize = require('../config');

class Post extends Model {}

Post.init(
    {
        id: {
            type:DataTypes.UUID,
            defaultValues: UUIDV4,
            primaryKey: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        body: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        userId: {
            type: DataTypes.UUID,
            references: {
                model: 'user',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        modelName: 'post'
    }
)

module.exports = Post;