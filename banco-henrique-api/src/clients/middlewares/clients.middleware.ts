// middlewares = executam em todas as requisições, faz algumas verificações

import express from 'express';
import clientsService from '../services/clients.service';
import debug from 'debug';

const log: debug.IDebugger = debug('app:clients-middleware');

class ClientsMiddleware {
    async validateRequiredClientBodyFields(req: express.Request, res: express.Response, next: express.NextFunction) {
        if (req.body && (req.body.cpf || req.body.cnpj)) {
            next();
        } else {
            res.status(400).send({error: `Você deve enviar o campo cpf ou cnpj.`})
        }
    }

    async validateClientExists(req: express.Request, res: express.Response, next: express.NextFunction) {
        const user = await clientsService.readById(Number(req.params.cpfCnpj));
        if (user) {
            next();
        } else {
            res.status(404).send({error: `Usuário ${req.params.cpfCnpj} não existe`});
        }
    }

    async validateClientRepeated(req: express.Request, res: express.Response, next: express.NextFunction) {
        let resourceId: number = ('cpf' in req.body ? req.body.cpf : req.body.cnpj)
        const user = await clientsService.readById(resourceId);
        if (!user) {
            next();
        } else {
            res.status(404).send({error: `Usuário ${resourceId} já existe`});
        }
    }
}

export default new ClientsMiddleware();