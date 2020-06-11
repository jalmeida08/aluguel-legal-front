import { Pessoa } from './pessoa';
import { Despesa } from './despesa';
import { Imovel } from './imovel';

export class contrato{
    
    public id: number;
    public imovel: Imovel;
    public despesa: Despesa;
    public pessoa: Pessoa;
    public datainicio: Date;
    public datafim: Date;
    public datacontrato: Date;
}