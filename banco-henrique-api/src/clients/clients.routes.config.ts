// pasta clients = pasta de domínio do cliente

import { CommonRoutesConfig } from "../common/common.routes.config";
import ClientsController from './controllers/clients.controller';
import ClientsMiddleware from './middlewares/clients.middleware';
import express from "express";

export class ClientsRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'ClientsRoutes');
    }

    configureRoutes(): express.Application {
        // criação de rotas do cliente com dados específicos do cliente
        this.app.route(`/clients`)
            .get(ClientsController.listClients)
            .post(
                ClientsMiddleware.validateRequiredClientBodyFields,
                ClientsMiddleware.validateClientRepeated,
                ClientsController.createClient
            );

            this.app.route(`/clients/:cpfCnpj`)
                //.all = vai rodar o parâmetro para todos os métodos daquela rota
                .all(ClientsMiddleware.validateClientExists)
                .get(ClientsController.getClientById)
                .put(
                    ClientsMiddleware.validateRequiredClientBodyFields,
                    ClientsController.updateClient
                )
                .delete(ClientsController.removeClient);

        return this.app;
    }
}