"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Produto = void 0;
class Produto {
    constructor() {
        this.id = 1;
        this.desc = "Computador";
        this.foto = "computador.jpg";
        this.preco = 1000.00;
        // poderia recuperar do banco de dados
    }
    exibir() {
        console.log("PRODUTO: " + this.id + "|" + this.desc + "|" + this.foto + "| R$ " + this.preco);
    }
}
exports.Produto = Produto;
