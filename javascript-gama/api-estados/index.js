const http = require("http");
const listEstados = require("./database/estados.json");

const server = http.createServer((request, response) => {

    // Permite o acesso
    response.setHeader("Access-Control-Allow-Origin", "*");

    // Converte o objeto pra texto
    response.write(JSON.stringify(listEstados));

    return response.end();
});

server.listen(8000);
