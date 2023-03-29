const sequelize = require("sequelize");
const db = require('../database');

const MovieCast = db.define(
    "MovieCast", 
    {
    movie_id:{
        type: sequelize.DataTypes.INTEGER,
    },
    person_id: {
        type: sequelize.DataTypes.STRING,
    },
    gender_id: {
        type: sequelize.DataTypes.INTEGER,
    },
    cast_order: {
        type: sequelize.DataTypes.INTEGER,
    },
    character_name: {
        type: sequelize.DataTypes.STRING,
    }
},
{
    tableName: "movie_cast",
    timestamps: false,
}
);

MovieCast.removeAttribute("id");

module.exports = MovieCast;