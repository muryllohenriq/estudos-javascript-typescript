const express = require("express");
const usuariosController = require('../controllers/usuariosController')
const routes = express.Router();

// Criar as rotas de usuarios aqui
routes.post("/usuarios", usuariosController.registro);

module.exports = routes;
