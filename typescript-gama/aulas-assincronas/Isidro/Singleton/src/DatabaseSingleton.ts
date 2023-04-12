export class DatabaseSingleton{

    private static instance: DatabaseSingleton;
    // métodos para controlar a instância do singleton (que independem de ter ou não o objeto instanciado)

    // o construtor precisa estar indisponível
    private constructor(){
        // por enquanto não faz nada.
        // aqui poderia colocar a regra de conexão com o banco
        console.log("CONSTRUCTOR - aqui eu crio a conexão com o banco...");
    }

    public static getInstance(): DatabaseSingleton{
        if(!DatabaseSingleton.instance){ // ele tá como undefined? se sim
            DatabaseSingleton.instance = new DatabaseSingleton();
        }
        return DatabaseSingleton.instance;
    }
    
    // métodos de negócio: aquilo que o meu database pode fazer

    public executarQuery(query: string): void{
        console.log("DB> "+query)
    }
}