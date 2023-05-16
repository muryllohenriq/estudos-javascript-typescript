import express from 'express';
import clientsService from '../services/clients.service';
import debug from 'debug';

const log: debug.IDebugger = debug('app:clients-controller');

class ClientsController {
    async listClients(req: express.Request, res: express.Response) {
        const clients = await clientsService.list();
        res.status(200).send(clients);
    }

    async getClientById(req: express.Request, res: express.Response) {
        const client = await clientsService.readById(Number(req.params.clientId));
        res.status(200).send(client);
    }

    async createClient(req: express.Request, res: express.Response) {
        const client = await clientsService.create(req.body);
        res.status(201).send(client);
    }

    async updateClient(req: express.Request, res: express.Response) {
        const client = await clientsService.updateById(req.body);
        res.status(200).send(client);
    }

    async removeClient(req: express.Request, res: express.Response) {
        const client = await clientsService.deleteById(Number(req.params.clientId));
        // 204 porque não tem retorno
        res.status(204).send();
    }
}

export default new ClientsController();