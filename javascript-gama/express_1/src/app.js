// Importa o express
const express = require("express");
// Importa rotas
const routes = require('./routes');
// Importa o middleware de erros
const handleError = require("./middlewares/handleError")
// Importa a estrutura de banco de dados
const db = require("./database")

// Inicializa o servidor
const app = express();

// executar a função db
db.hasConnection();

// ativar o recurso de json
app.use(express.json());

// fala pro servidor usar as rotas externas e o middle de erros
app.use(routes);
app.use(handleError);

// Coloca pra rodar nessa porta (3000).
app.listen(3000, ()=> console.log("Servidor rodando na porta 3000"));