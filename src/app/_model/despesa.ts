import { Imovel } from './imovel';
import { StatusPagamento } from './statusPagamento';

export class Despesa {
    public id: number;
	public nome: string;
	public valor: string;
	public imovel: Array<Imovel> = new Array<Imovel>();
	public dataReferencia: Date;
	public dataVencimento: Date; 
	public dataPagamento: Date;
	public descricao: string;
	public statusPagamento: StatusPagamento;
}