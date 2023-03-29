const express = require("express");
const cursosController = require("../controllers/curso.controller"); 

const routes = express.Router();

routes.get("/lista-de-cursos", cursosController.get);

routes.post("/curso", cursosController.insert);

module.exports = routes;

