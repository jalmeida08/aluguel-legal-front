import { Pessoa } from './pessoa';
import { StatusImovel } from './statusImovel';
import { Despesa } from './despesa';

export class Imovel {
	public id: number;
	public pessoa: Array<Pessoa> = new Array<Pessoa>();
	public cep: number;
	public endereco: string;
	public numero: number;
	public bairro: string;
	public cidade: string;
	public estado: string;
	public complemento: string;
	public despesa: Array<Despesa> = new Array<Despesa>();
	public statusImovel: StatusImovel;
	public versao: number;
}