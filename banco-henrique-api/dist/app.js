"use strict";
// app.ts recebe a requisição, vê que rota é e caso seja clients manda pra la
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http = __importStar(require("http"));
// winston = logs pra saber como o sistema está rodando
const winston = __importStar(require("winston"));
const expressWinston = __importStar(require("express-winston"));
const cors_1 = __importDefault(require("cors"));
const debug_1 = require("debug");
const clients_routes_config_1 = require("./clients/clients.routes.config");
// cria a aplicação
const app = (0, express_1.default)();
// cria o server
const server = http.createServer(app);
// define a porta
const port = 3000;
// array de rotas
const routes = [];
// instancia a biblioteca de debug
const debugLog = (0, debug_1.debug)('app');
// dois use pro json e pro cors
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// configuração do log, formato que vai imprimir o log
const loggerOptions = {
    transports: [new winston.transports.Console()],
    format: winston.format.combine(winston.format.json(), winston.format.prettyPrint(), winston.format.colorize({ all: true })),
};
// testa se está em debug ou não, pra não ficar mandando um monte de logs se não estiver em produção
if (!process.env.DEBUG) {
    loggerOptions.meta = false;
}
// configurações do winston
app.use(expressWinston.logger(loggerOptions));
// incluindo as rotas de cliente
routes.push(new clients_routes_config_1.ClientsRoutes(app));
const runningMessage = `Servidor rodando na porta ${port}`;
app.get('/', (req, res) => {
    res.status(200).send(runningMessage);
});
server.listen(port, () => {
    routes.forEach((route) => {
        debugLog(`Rotas configuradas para ${route.getName()}`);
    });
    console.log(runningMessage);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2FwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsNkVBQTZFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTdFLHNEQUE4QjtBQUM5QiwyQ0FBNkI7QUFFN0IsdURBQXVEO0FBQ3ZELGlEQUFtQztBQUNuQyxnRUFBa0Q7QUFDbEQsZ0RBQXdCO0FBQ3hCLGlDQUE4QjtBQUc5QiwyRUFBZ0U7QUFFaEUsbUJBQW1CO0FBQ25CLE1BQU0sR0FBRyxHQUF3QixJQUFBLGlCQUFPLEdBQUUsQ0FBQztBQUMzQyxnQkFBZ0I7QUFDaEIsTUFBTSxNQUFNLEdBQWdCLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDbkQsaUJBQWlCO0FBQ2pCLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQztBQUNsQixpQkFBaUI7QUFDakIsTUFBTSxNQUFNLEdBQXlCLEVBQUUsQ0FBQztBQUN4QyxrQ0FBa0M7QUFDbEMsTUFBTSxRQUFRLEdBQW9CLElBQUEsYUFBSyxFQUFDLEtBQUssQ0FBQyxDQUFDO0FBRS9DLCtCQUErQjtBQUMvQixHQUFHLENBQUMsR0FBRyxDQUFDLGlCQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUN4QixHQUFHLENBQUMsR0FBRyxDQUFDLElBQUEsY0FBSSxHQUFFLENBQUMsQ0FBQztBQUVoQixzREFBc0Q7QUFDdEQsTUFBTSxhQUFhLEdBQWlDO0lBQ2hELFVBQVUsRUFBRSxDQUFDLElBQUksT0FBTyxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUM5QyxNQUFNLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQzFCLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEVBQ3JCLE9BQU8sQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLEVBQzVCLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxDQUFDLENBQ3pDO0NBQ0osQ0FBQTtBQUVELG9HQUFvRztBQUNwRyxJQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUU7SUFDbkIsYUFBYSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7Q0FDOUI7QUFFRCwyQkFBMkI7QUFDM0IsR0FBRyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7QUFFOUMsZ0NBQWdDO0FBQ2hDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxxQ0FBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFFcEMsTUFBTSxjQUFjLEdBQUcsNkJBQTZCLElBQUksRUFBRSxDQUFDO0FBRTNELEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBb0IsRUFBRSxHQUFxQixFQUFFLEVBQUU7SUFDekQsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7QUFDekMsQ0FBQyxDQUFDLENBQUE7QUFFRixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUU7SUFDckIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQXlCLEVBQUUsRUFBRTtRQUN6QyxRQUFRLENBQUMsMkJBQTJCLEtBQUssQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDM0QsQ0FBQyxDQUFDLENBQUM7SUFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQ2hDLENBQUMsQ0FBQyxDQUFDIn0=