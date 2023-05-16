import { IPessoaDTO } from "./pessoa.dto";

export interface IPessoaFisicaDTO extends IPessoaDTO {
    nome: string,
    cpf: number
}