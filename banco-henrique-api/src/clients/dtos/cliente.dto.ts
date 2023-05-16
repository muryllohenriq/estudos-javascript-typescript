import { IPessoaFisicaDTO } from "./pessoafisica.dto";
import { IPessoaJuridicaDTO } from "./pessoajuridica.dto";

export type ClienteDTO = IPessoaFisicaDTO | IPessoaJuridicaDTO;