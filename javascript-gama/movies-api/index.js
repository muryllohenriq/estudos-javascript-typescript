const express = require("express");
const { hasConection } = require("./src/database");

const routes = require("./src/routes");

const app = express();
hasConection();

app.use(express.json());
app.use(routes);

app.listen(4000, ()=> console.log("Servidor rodando na porta 4000"));