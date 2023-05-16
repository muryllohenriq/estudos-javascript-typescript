// dao (data access object) = design pattern (padrão de projeto) relacionado a banco de dados, aqui começa a ter relação com o banco de dados

import { ClienteDTO } from "../dtos/cliente.dto";
import debug from "debug";

const log: debug.IDebugger = debug('app:in-memory-dao');

class ClientesDAO {
    private _clientes: ClienteDTO[];

    constructor(){
        this._clientes = [];
        log('Criando nova instancia de ClienteDao');
    }

    cadastrar(pessoa: ClienteDTO): ClienteDTO {
        let objPessoa;

        pessoa.indexId = this._clientes.length;
        objPessoa = pessoa;
        this._clientes.push(objPessoa);

        return objPessoa;
    }

    atualizar(pessoa: ClienteDTO): ClienteDTO | undefined {
        let objPessoa;

        objPessoa = pessoa;

        if(objPessoa.indexId === undefined)
            return;

        this._clientes[objPessoa.indexId] = objPessoa;

        return objPessoa;
    }

    listar(): (ClienteDTO)[] {
        let objPessoas: (ClienteDTO)[] = [];

        for(let cliente of this._clientes)
            objPessoas.push(cliente);

        return objPessoas;
    }

    excluir(cpfCnpj: number): void {
        
        const indexId = this._clientes.findIndex((obj: ClienteDTO) => {
            if('cpf' in obj)
                return obj.cpf === cpfCnpj;
            else
                return obj.cnpj === cpfCnpj;
        });

        this._clientes.splice(indexId, 1);
    }

    buscar(cpfCnpj: number): ClienteDTO | undefined {
        
        const cliente = this._clientes.find((obj: ClienteDTO) => {
            if('cpf' in obj)
                return obj.cpf === cpfCnpj;
            else
                return obj.cnpj === cpfCnpj;
        });

        if(!cliente)
            return;

        return cliente;
    }
}

export default new ClientesDAO();