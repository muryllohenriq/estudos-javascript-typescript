class DBConnect {

    // static = propriedades que você não precisa dar "new" para utilizar
    // '_'(underline) antes do nome pra identificar propriedades com restrições de acesso
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
    
    private _db: DBConnect;
    private static _instance: ClientDao;

    private constructor(){
        this._db = DBConnect.getInstance();
        console.log('Novo dao');
    }

    public static getInstance(): ClientDao {
        if(!ClientDao._instance){
            ClientDao._instance = new ClientDao();
        }

        return ClientDao._instance
    }
}

function cadastraUsuario(){
    let clientDao: ClientDao = ClientDao.getInstance()
}

function atualizaUsuario(){
    let clientDao: ClientDao = ClientDao.getInstance()
}

cadastraUsuario()
atualizaUsuario()
cadastraUsuario()
atualizaUsuario()