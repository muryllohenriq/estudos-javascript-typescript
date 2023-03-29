const http = require("http");
const listCoins = require("./database/moedas.json")

const server = http.createServer((request, response) => {
    const text = "Funcionando corretamente";

    response.setHeader("Access-Control-Allow-Origin", "*");

    response.write(JSON.stringify(listCoins));

    return response.end();
});

server.listen(8000);
