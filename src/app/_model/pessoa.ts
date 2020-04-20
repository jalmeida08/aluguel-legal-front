import { Usuario } from './usuario';
import { Contato } from './contato';
import { Imovel } from './imovel';

export class Pessoa{

    public id: number;
	public nome: string;
	public numCpf: number;
	public usuario: Usuario;
	public contato: Array<Contato> = new Array<Contato>();
	public imovel: Array<Imovel> = new Array<Imovel>();
	public versao: number;

}