const express = require("express");
const moedasController = require("../controller/moedas.controller");

const routes = express.Router();

routes.get("/", moedasController.welcome);

routes.get("/lista-de-moedas", moedasController.get);

routes.post("/moeda", moedasController.insert);

module.exports = routes;
