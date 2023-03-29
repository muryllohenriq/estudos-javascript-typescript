const sequelize = require("sequelize");
const db = require('../database');

const Gender = db.define(
    "Gender", 
    {
    gender_id:{
        type: sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    gender: {
        type: sequelize.DataTypes.STRING,
    },
},
{
    tableName: "gender",
    timestamps: false,
}
);

module.exports = Gender;