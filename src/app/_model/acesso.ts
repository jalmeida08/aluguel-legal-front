import { Usuario } from './usuario';

export class Acesso {
    
    public id: number;
	public papel: string ;
	public usuario: Array<Usuario> = new Array<Usuario>();
}