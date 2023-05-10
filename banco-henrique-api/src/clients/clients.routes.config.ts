import { CommonRoutesConfig } from "../common/common.routes.config";
// import ClientsController from './controllers/clients.controller';
// import ClientsMiddleware from './middlewares/clients.middleware';
import express from "express";

export class ClientsRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'ClientsRoutes');
    }

    configureRoutes(): express.Application {
        this.app.route(`/clients`)
            .get((req: express.Request, res: express.Response) => {
                res.status(200).send(`Lista de clientes`);
            })
            .post((req: express.Request, res: express.Response) => {
                res.status(201).send(`Cria cliente`);
            });

            this.app.route(`/clients/:clientId`)
                .get((req: express.Request, res: express.Response) => {
                    res.status(200).send(`GET requested for id ${req.params.clientId}`);
                })
                .put((req: express.Request, res: express.Response) => {
                    res.status(200).send(`PUT requested for id ${req.params.clientId}`);
                })
                .delete((req: express.Request, res: express.Response) => {
                    res.status(204).send(`DELETE requested for id ${req.params.clientId}`);
                });

        return this.app;
    }
}