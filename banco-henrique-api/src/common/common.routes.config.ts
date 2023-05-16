// pasta common = tudo que pode ser compartilhado entre clientes e outras entidades do sistema, que não é específico

import  express  from "express";
// estrutura de criação de rotas, sempre terá a mesma estrutura
export abstract class CommonRoutesConfig {
    constructor(public app: express.Application, public name: string){
        this.configureRoutes();
    }

    getName(){
        return this.name;
    }

    abstract configureRoutes(): express.Application;
}