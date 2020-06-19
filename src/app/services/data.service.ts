import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../_model/usuario';
import { Alerta } from '../_diretivas/alerta/alerta';
import { AppComponent } from '../app.component';

@Injectable()
export class DataService {    

    public alertas: Array<Alerta> = new Array<Alerta>();

    constructor(private _router: Router) {}

    public verificarSessao(): void{
        let usrAluguelLegal   = localStorage.getItem('usrAluguelLegal');
        let tkAluguelLegal    = localStorage.getItem('tkAluguelLegal');
        let usrIdAluguelLegal = localStorage.getItem('usrIdAluguelLegal');

        if(!usrAluguelLegal || !tkAluguelLegal || !usrIdAluguelLegal ){
            // this._router.navigate(['']);
            // return;
        }
    }

    public registrarSessao(usuario: Usuario): void {
        localStorage.setItem('usrIdAluguelLegal', usuario.id.toString());
        localStorage.setItem('usrAluguelLegal', usuario.usuario);
        localStorage.setItem('tkAluguelLegal', usuario.token);
    }
    
    public recuperarSessao(): string{
        if(localStorage.getItem('tkAluguelLegal'))
            return localStorage.getItem('tkAluguelLegal'); 
        return "";

    }

    public limparSessao(): void {
        localStorage.clear();
    }
    
    public urlLivreAutenticacao(url: string){
        let listaUrl:Array<String> = Array<String>("administracao/usuario");
        
    }
	// RESPONSAVEL POR DISPARAR AS MENSAGENS NA TELA
	public alerta(
		mensagem: string,
		tipoMensagem: string,
		mensagemDestaque: string): Array<Alerta> {
		this.alertas.push(
			{
				mensagem: mensagem,
				tipoMensagem: tipoMensagem,
				mensagemDestaque: mensagemDestaque
			}
        );
        return this.alertas;
    }
     
    public limparMensagens(): Array<Alerta>{
        console.info('Limpando');
        
        this.alertas = new Array<Alerta>();
        return this.alertas;
    }
}