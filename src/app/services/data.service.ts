import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../_model/usuario';

@Injectable()
export class DataService {

    constructor(private _router: Router) { }

    verificarSessao(): void{
        let usrAluguelLegal   = localStorage.getItem('usrAluguelLegal');
        let tkAluguelLegal    = localStorage.getItem('tkAluguelLegal');
        let usrIdAluguelLegal = localStorage.getItem('usrIdAluguelLegal');

        if(!usrAluguelLegal || !tkAluguelLegal || !usrIdAluguelLegal ){
            console.log('dentro do if');
            // this._router.navigate(['']);
            // return;
        }
    }

    registrarSessao(usuario: Usuario): void {
        localStorage.setItem('usrIdAluguelLegal', usuario.id.toString());
        localStorage.setItem('usrAluguelLegal', usuario.usuario);
        localStorage.setItem('tkAluguelLegal', usuario.token);
    }
    
    recuperarSessao(): string{
        if(localStorage.getItem('tkAluguelLegal'))
            return localStorage.getItem('tkAluguelLegal'); 
        return "";

    }

    limparSessao(): void {
        localStorage.clear();
    }
    
}