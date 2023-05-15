// app.ts recebe a requisição, vê que rota é e caso seja clients manda pra la

import express from 'express';
import * as http from 'http';

// winston = logs pra saber como o sistema está rodando
import * as winston from 'winston';
import * as expressWinston from 'express-winston';
import cors from 'cors';
import { debug } from 'debug';

import { CommonRoutesConfig } from './common/common.routes.config';
import { ClientsRoutes } from './clients/clients.routes.config';

// cria a aplicação
const app: express.Application = express();
// cria o server
const server: http.Server = http.createServer(app);
// define a porta
const port = 3000;
// array de rotas
const routes: CommonRoutesConfig[] = [];
// instancia a biblioteca de debug
const debugLog: debug.IDebugger = debug('app');

// dois use pro json e pro cors
app.use(express.json());
app.use(cors());

// configuração do log, formato que vai imprimir o log
const loggerOptions: expressWinston.LoggerOptions = {
    transports: [new winston.transports.Console()],
    format: winston.format.combine(
        winston.format.json(),
        winston.format.prettyPrint(),
        winston.format.colorize({ all: true })
    ),
}

// testa se está em debug ou não, pra não ficar mandando um monte de logs se não estiver em produção
if(!process.env.DEBUG) {
    loggerOptions.meta = false;
}

// configurações do winston
app.use(expressWinston.logger(loggerOptions));

// incluindo as rotas de cliente
routes.push(new ClientsRoutes(app));

const runningMessage = `Servidor rodando na porta ${port}`;

app.get('/', (req: express.Request, res: express.Response) => {
    res.status(200).send(runningMessage);
})

server.listen(port, () => {
    routes.forEach((route: CommonRoutesConfig) => {
        debugLog(`Rotas configuradas para ${route.getName()}`);
    });
    console.log(runningMessage);
});