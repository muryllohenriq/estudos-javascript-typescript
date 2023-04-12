"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseSingleton = void 0;
class DatabaseSingleton {
    // métodos para controlar a instância do singleton (que independem de ter ou não o objeto instanciado)
    // o construtor precisa estar indisponível
    constructor() {
        // por enquanto não faz nada.
        // aqui poderia colocar a regra de conexão com o banco
        console.log("CONSTRUCTOR - aqui eu crio a conexão com o banco...");
    }
    static getInstance() {
        if (!DatabaseSingleton.instance) { // ele tá como undefined? se sim
            DatabaseSingleton.instance = new DatabaseSingleton();
        }
        return DatabaseSingleton.instance;
    }
    // métodos de negócio: aquilo que o meu database pode fazer
    executarQuery(query) {
        console.log("DB> " + query);
    }
}
exports.DatabaseSingleton = DatabaseSingleton;
