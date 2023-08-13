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
        console.log('Novo dao');
    }
    static getInstance() {
        if (!ClientDao._instance) {
            ClientDao._instance = new ClientDao();
        }
        return ClientDao._instance;
    }
}
function cadastraUsuario() {
    let clientDao = ClientDao.getInstance();
}
function atualizaUsuario() {
    let clientDao = ClientDao.getInstance();
}
cadastraUsuario();
atualizaUsuario();
cadastraUsuario();
atualizaUsuario();
