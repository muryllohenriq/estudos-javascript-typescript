// dtos = são os objetos que estamos manipulando

import { IPessoaFisicaDTO } from "./pessoafisica.dto";
import { IPessoaJuridicaDTO } from "./pessoajuridica.dto";

export type ClienteDTO = IPessoaFisicaDTO | IPessoaJuridicaDTO;