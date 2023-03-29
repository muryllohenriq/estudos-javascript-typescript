const express = require("express");
// Middlewares, serve para criar lógicas para validar as requests
const requestLog = require("../middlewares/requestLog")
const bloqueio = require("../middlewares/bloqueio")
// controller que tem a responsabilidade de organizar e dizer o que acontece no fluxo
const produtoController = require('../controllers/produtoController')
const usuariosController = require('../controllers/usuariosController')
const authController = require('../controllers/authController')
// Importa o validation
const usuarioCreateValidation = require("../validations/usuarios/create")
const authLoginValidation = require("../validations/auth/login")
const auth = require("../middlewares/auth");
// Ativa o recurso de rotas
const routes = express.Router();

// rotas
// rota com responsabilidade dividida, define a rota e qual controller. o "(req, res)" fica no controller.
routes.get("/produtos", requestLog, bloqueio, produtoController.listarProduto);
routes.post("/produtos", auth, produtoController.cadastrarProduto);
routes.delete("/produtos/:id", produtoController.deletarProduto)
routes.put("/produtos/:id", produtoController.atualizarProduto)

routes.post("/usuarios", usuarioCreateValidation, usuariosController.registro);
routes.post("/login", authLoginValidation, authController.login);

// Exporta o modulo
module.exports = routes;