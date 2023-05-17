"use strict";
class DBConnect {
    constructor() {
        console.log('Nova conexão com o banco de dados aberta');
    }
    static getInstance() {
        if (!DBConnect._instance) {
            // se não existe, cria
            DBConnect._instance = new DBConnect();
        }
        // se existe apenas retorna
        return DBConnect._instance;
    }
}
class ClientDao {
    constructor() {
        this._db = DBConnect.getInstance();
    }
}
function cadastraUsuario() {
    let clientDao = new ClientDao;
}
function atualizaUsuario() {
    let clientDao = new ClientDao;
}
cadastraUsuario();
atualizaUsuario();
cadastraUsuario();
atualizaUsuario();
cadastraUsuario();
atualizaUsuario();
cadastraUsuario();
atualizaUsuario();
cadastraUsuario();
atualizaUsuario();
cadastraUsuario();
atualizaUsuario();
cadastraUsuario();
atualizaUsuario();
cadastraUsuario();
atualizaUsuario();
cadastraUsuario();
atualizaUsuario();
cadastraUsuario();
atualizaUsuario();
