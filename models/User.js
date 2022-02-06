const { Model, DataTypes, UUIDV4 } = require('sequelize');
const sequelize = require('../config');

class User extends MOdel {}

User.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: UUIDV4,
            primaryKey: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        }, email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [6]
            }
        }
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        modelName: 'User',
    }
)

module.exports = User;