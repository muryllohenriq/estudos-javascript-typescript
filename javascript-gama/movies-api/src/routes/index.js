const express = require("express");
const GenderController = require("../controllers/gender.controller");
const movieCastController = require("../controllers/movieCast.controller")
const routes = express.Router();

routes.get("/gender/movie-casts", GenderController.showMovieCastsByGender);
routes.get("/gender", GenderController.listAll);
routes.get("/gender/:id", GenderController.getOne);
routes.post("/gender", GenderController.createGender);
routes.get("/movie-cast", movieCastController.listAll);

module.exports = routes;