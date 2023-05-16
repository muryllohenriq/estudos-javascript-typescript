import { IPessoaDTO } from "./pessoa.dto";

export interface IPessoaJuridicaDTO extends IPessoaDTO {
    razaoSocial: string,
    cnpj: number
}