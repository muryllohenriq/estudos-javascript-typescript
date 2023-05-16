"use strict";
// pasta clients = pasta de domínio do cliente
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientsRoutes = void 0;
const common_routes_config_1 = require("../common/common.routes.config");
const clients_controller_1 = __importDefault(require("./controllers/clients.controller"));
const clients_middleware_1 = __importDefault(require("./middlewares/clients.middleware"));
class ClientsRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, 'ClientsRoutes');
    }
    configureRoutes() {
        // criação de rotas do cliente com dados específicos do cliente
        this.app.route(`/clients`)
            .get(clients_controller_1.default.listClients)
            .post(clients_middleware_1.default.validateRequiredClientBodyFields, clients_middleware_1.default.validateClientRepeated, clients_controller_1.default.createClient);
        this.app.route(`/clients/:cpfCnpj`)
            //.all = vai rodar o parâmetro para todos os métodos daquela rota
            .all(clients_middleware_1.default.validateClientExists)
            .get(clients_controller_1.default.getClientById)
            .put(clients_middleware_1.default.validateRequiredClientBodyFields, clients_controller_1.default.updateClient)
            .delete(clients_controller_1.default.removeClient);
        return this.app;
    }
}
exports.ClientsRoutes = ClientsRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50cy5yb3V0ZXMuY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NsaWVudHMvY2xpZW50cy5yb3V0ZXMuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSw4Q0FBOEM7Ozs7OztBQUU5Qyx5RUFBb0U7QUFDcEUsMEZBQWlFO0FBQ2pFLDBGQUFpRTtBQUdqRSxNQUFhLGFBQWMsU0FBUSx5Q0FBa0I7SUFDakQsWUFBWSxHQUF3QjtRQUNoQyxLQUFLLENBQUMsR0FBRyxFQUFFLGVBQWUsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRCxlQUFlO1FBQ1gsK0RBQStEO1FBQy9ELElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQzthQUNyQixHQUFHLENBQUMsNEJBQWlCLENBQUMsV0FBVyxDQUFDO2FBQ2xDLElBQUksQ0FDRCw0QkFBaUIsQ0FBQyxnQ0FBZ0MsRUFDbEQsNEJBQWlCLENBQUMsc0JBQXNCLEVBQ3hDLDRCQUFpQixDQUFDLFlBQVksQ0FDakMsQ0FBQztRQUVGLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLG1CQUFtQixDQUFDO1lBQy9CLGlFQUFpRTthQUNoRSxHQUFHLENBQUMsNEJBQWlCLENBQUMsb0JBQW9CLENBQUM7YUFDM0MsR0FBRyxDQUFDLDRCQUFpQixDQUFDLGFBQWEsQ0FBQzthQUNwQyxHQUFHLENBQ0EsNEJBQWlCLENBQUMsZ0NBQWdDLEVBQ2xELDRCQUFpQixDQUFDLFlBQVksQ0FDakM7YUFDQSxNQUFNLENBQUMsNEJBQWlCLENBQUMsWUFBWSxDQUFDLENBQUM7UUFFaEQsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQ3BCLENBQUM7Q0FDSjtBQTNCRCxzQ0EyQkMifQ==