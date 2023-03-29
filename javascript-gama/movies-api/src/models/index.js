const Gender = require("./Gender");
const MovieCast = require("./MovieCast");
const person = require("./Person")

MovieCast.belongsTo(Gender, {
  foreignKey: "gender_id",
});

Gender.hasMany(MovieCast, {
  foreignKey: "gender_id",
});

MovieCast.belongsTo(person, {
  foreignKey: "person_id"
});

person.hasMany(MovieCast, {
  foreignKey: "person_id",
})

module.exports = {
    Gender,
    MovieCast,
    person,
}