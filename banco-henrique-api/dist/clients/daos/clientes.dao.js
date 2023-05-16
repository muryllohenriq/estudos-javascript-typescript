"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const debug_1 = __importDefault(require("debug"));
const log = (0, debug_1.default)('app:in-memory-dao');
class ClientesDAO {
    constructor() {
        this._clientes = [];
        log('Criando nova instancia de ClienteDao');
    }
    cadastrar(pessoa) {
        let objPessoa;
        pessoa.indexId = this._clientes.length;
        objPessoa = pessoa;
        this._clientes.push(objPessoa);
        return objPessoa;
    }
    atualizar(pessoa) {
        let objPessoa;
        objPessoa = pessoa;
        if (objPessoa.indexId === undefined)
            return;
        this._clientes[objPessoa.indexId] = objPessoa;
        return objPessoa;
    }
    listar() {
        let objPessoas = [];
        for (let cliente of this._clientes)
            objPessoas.push(cliente);
        return objPessoas;
    }
    excluir(cpfCnpj) {
        const indexId = this._clientes.findIndex((obj) => {
            if ('cpf' in obj)
                return obj.cpf === cpfCnpj;
            else
                return obj.cnpj === cpfCnpj;
        });
        this._clientes.splice(indexId, 1);
    }
    buscar(cpfCnpj) {
        const cliente = this._clientes.find((obj) => {
            if ('cpf' in obj)
                return obj.cpf === cpfCnpj;
            else
                return obj.cnpj === cpfCnpj;
        });
        if (!cliente)
            return;
        return cliente;
    }
}
exports.default = new ClientesDAO();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50ZXMuZGFvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NsaWVudHMvZGFvcy9jbGllbnRlcy5kYW8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxrREFBMEI7QUFFMUIsTUFBTSxHQUFHLEdBQW9CLElBQUEsZUFBSyxFQUFDLG1CQUFtQixDQUFDLENBQUM7QUFFeEQsTUFBTSxXQUFXO0lBR2I7UUFDSSxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNwQixHQUFHLENBQUMsc0NBQXNDLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRUQsU0FBUyxDQUFDLE1BQWtCO1FBQ3hCLElBQUksU0FBUyxDQUFDO1FBRWQsTUFBTSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQztRQUN2QyxTQUFTLEdBQUcsTUFBTSxDQUFDO1FBQ25CLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRS9CLE9BQU8sU0FBUyxDQUFDO0lBQ3JCLENBQUM7SUFFRCxTQUFTLENBQUMsTUFBa0I7UUFDeEIsSUFBSSxTQUFTLENBQUM7UUFFZCxTQUFTLEdBQUcsTUFBTSxDQUFDO1FBRW5CLElBQUcsU0FBUyxDQUFDLE9BQU8sS0FBSyxTQUFTO1lBQzlCLE9BQU87UUFFWCxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsR0FBRyxTQUFTLENBQUM7UUFFOUMsT0FBTyxTQUFTLENBQUM7SUFDckIsQ0FBQztJQUVELE1BQU07UUFDRixJQUFJLFVBQVUsR0FBbUIsRUFBRSxDQUFDO1FBRXBDLEtBQUksSUFBSSxPQUFPLElBQUksSUFBSSxDQUFDLFNBQVM7WUFDN0IsVUFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUU3QixPQUFPLFVBQVUsQ0FBQztJQUN0QixDQUFDO0lBRUQsT0FBTyxDQUFDLE9BQWU7UUFFbkIsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFlLEVBQUUsRUFBRTtZQUN6RCxJQUFHLEtBQUssSUFBSSxHQUFHO2dCQUNYLE9BQU8sR0FBRyxDQUFDLEdBQUcsS0FBSyxPQUFPLENBQUM7O2dCQUUzQixPQUFPLEdBQUcsQ0FBQyxJQUFJLEtBQUssT0FBTyxDQUFDO1FBQ3BDLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFRCxNQUFNLENBQUMsT0FBZTtRQUVsQixNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQWUsRUFBRSxFQUFFO1lBQ3BELElBQUcsS0FBSyxJQUFJLEdBQUc7Z0JBQ1gsT0FBTyxHQUFHLENBQUMsR0FBRyxLQUFLLE9BQU8sQ0FBQzs7Z0JBRTNCLE9BQU8sR0FBRyxDQUFDLElBQUksS0FBSyxPQUFPLENBQUM7UUFDcEMsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFHLENBQUMsT0FBTztZQUNQLE9BQU87UUFFWCxPQUFPLE9BQU8sQ0FBQztJQUNuQixDQUFDO0NBQ0o7QUFFRCxrQkFBZSxJQUFJLFdBQVcsRUFBRSxDQUFDIn0=