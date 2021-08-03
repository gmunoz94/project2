const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection')

class patient extends Model {

}

patient.init(


    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            },

            
        },

        phone_number: {
            type: DataTypes.STRING,
            allowNull: false,
        },

    },

    {

        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'patients',
    }
);


module.exports= patient;