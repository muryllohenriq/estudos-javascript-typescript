"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const clientes_dao_1 = __importDefault(require("../daos/clientes.dao"));
// classe sem nenhuma propriedade para definir não precisa de constructor
class ClientsService {
    // dentro de APIs é mais recomendo async await do que .then, pra deixar o código mais enxuto
    create(resource) {
        return __awaiter(this, void 0, void 0, function* () {
            return clientes_dao_1.default.cadastrar(resource);
        });
    }
    deleteById(resourceId) {
        return __awaiter(this, void 0, void 0, function* () {
            return clientes_dao_1.default.excluir(resourceId);
        });
    }
    list() {
        return __awaiter(this, void 0, void 0, function* () {
            return clientes_dao_1.default.listar();
        });
    }
    readById(resourceId) {
        return __awaiter(this, void 0, void 0, function* () {
            return clientes_dao_1.default.buscar(resourceId);
        });
    }
    updateById(resource) {
        return __awaiter(this, void 0, void 0, function* () {
            return clientes_dao_1.default.atualizar(resource);
        });
    }
}
exports.default = new ClientsService();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50cy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NsaWVudHMvc2VydmljZXMvY2xpZW50cy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0VBQStDO0FBSS9DLHlFQUF5RTtBQUN6RSxNQUFNLGNBQWM7SUFDaEIsNEZBQTRGO0lBQ3RGLE1BQU0sQ0FBQyxRQUFvQjs7WUFDN0IsT0FBTyxzQkFBVyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMzQyxDQUFDO0tBQUE7SUFFSyxVQUFVLENBQUMsVUFBa0I7O1lBQy9CLE9BQU8sc0JBQVcsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDM0MsQ0FBQztLQUFBO0lBRUssSUFBSTs7WUFDTixPQUFPLHNCQUFXLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDaEMsQ0FBQztLQUFBO0lBRUssUUFBUSxDQUFDLFVBQWtCOztZQUM3QixPQUFPLHNCQUFXLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzFDLENBQUM7S0FBQTtJQUVLLFVBQVUsQ0FBQyxRQUFvQjs7WUFDakMsT0FBTyxzQkFBVyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMzQyxDQUFDO0tBQUE7Q0FDSjtBQUVELGtCQUFlLElBQUksY0FBYyxFQUFFLENBQUMifQ==