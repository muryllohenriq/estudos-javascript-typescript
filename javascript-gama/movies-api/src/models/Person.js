const sequelize = require("sequelize");
const db = require('../database');

const person = db.define(
    "person", 
    {
    person_id:{
        type: sequelize.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    person_name: {
        type: sequelize.DataTypes.STRING,
    },
},
{
    tableName: "person",
    timestamps: false,
}
);

person.removeAttribute("id");

module.exports = person;