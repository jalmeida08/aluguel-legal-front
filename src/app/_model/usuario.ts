import { Pessoa } from './pessoa';
import { Acesso } from './acesso';

export class Usuario{

    public id     : number;
    public email  : string;
    public usuario: string;
	public pessoa : Pessoa;
    public senha  : string;
    public token  : string;
	public acesso: Array<Acesso> = new Array<Acesso>();

}