import ClientesDao from "../daos/clientes.dao";
import { CRUD } from "../../common/interfaces/crud.interface";
import { ClienteDTO } from "../dtos/cliente.dto";

// classe sem nenhuma propriedade para definir não precisa de constructor
class ClientsService implements CRUD {
    // dentro de APIs é mais recomendo async await do que .then, pra deixar o código mais enxuto
    async create(resource: ClienteDTO): Promise<ClienteDTO> {
        return ClientesDao.cadastrar(resource);
    }

    async deleteById(resourceId: number): Promise<void> {
        return ClientesDao.excluir(resourceId);
    }

    async list(): Promise<ClienteDTO[]> {
        return ClientesDao.listar();
    }

    async readById(resourceId: number): Promise<ClienteDTO | undefined> {
        return ClientesDao.buscar(resourceId);
    }

    async updateById(resource: ClienteDTO): Promise<ClienteDTO | undefined> {
        return ClientesDao.atualizar(resource);
    }
}

export default new ClientsService();