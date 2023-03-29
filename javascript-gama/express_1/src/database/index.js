const Sequelize = require("sequelize");

const DB_NAME  = "loja";
const DB_USER  = "root";
const DB_PASS  = "";
const DB_CONFIG = {
    dialect: "mysql",
    host: "localhost",
    port: 3306
};

// objeto para guardar a conexão do banco de dados
let db = {};

try {
    db = new Sequelize(DB_NAME, DB_USER, DB_PASS, DB_CONFIG);
} catch (error) {
    console.error("Erro ao tentar uma conexão com o banco de dados");
}

async function hasConnection() {
    try {
        await db.authenticate();
        console.log("Banco de dados conectado!");
    } catch (error) {
        console.error("Erro ao tentar uma conexão com o banco de dados");
    }
}

// Adicionar a função "hasConnection" ao objeto "db"
Object.assign(db, {
    hasConnection,
})

module.exports = db;