import { Pessoa } from './pessoa';
import { TipoTelefone } from './TipoTelefone';

export class Contato {

    public id: number;
	public pessoa: Pessoa;
	public numTelefone: number;
	public tipoTelefone: string;
	public whatsApp: boolean;
	public versao: number;
}