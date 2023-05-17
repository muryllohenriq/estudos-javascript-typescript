class DBConnect {

    // static = propriedades que você não precisa dar "new" para utilizar
    private static _instance: DBConnect;

    private constructor(){
        console.log('Nova conexão com o banco de dados aberta');
    }

    public static getInstance(): DBConnect {
        if(!DBConnect._instance){
            // se não existe, cria
            DBConnect._instance = new DBConnect();
        }
        // se existe apenas retorna
        return DBConnect._instance;
    }
}

class ClientDao {
    // '_'(underline) antes do nome pra identificar propriedades com restrições de acesso
    private _db: DBConnect;

    constructor(){
        this._db = DBConnect.getInstance();
    }
}

function cadastraUsuario(){
    let clientDao: ClientDao = new ClientDao;
}

function atualizaUsuario(){
    let clientDao: ClientDao = new ClientDao;
}

cadastraUsuario()
atualizaUsuario()
cadastraUsuario()
atualizaUsuario()
cadastraUsuario()
atualizaUsuario()
cadastraUsuario()
atualizaUsuario()
cadastraUsuario()
atualizaUsuario()
cadastraUsuario()
atualizaUsuario()
cadastraUsuario()
atualizaUsuario()
cadastraUsuario()
atualizaUsuario()
cadastraUsuario()
atualizaUsuario()
cadastraUsuario()
atualizaUsuario()