import { Pessoa } from './pessoa';
import { TipoTelefone } from './TipoTelefone';

export class Contato {

    private id: number;
	private pessoa: Pessoa;
	private numTelefone: number;
	private tipoTelefone: TipoTelefone;
	private whatsApp: boolean;
	private versao: number;
}