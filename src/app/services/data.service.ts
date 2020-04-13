import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../_model/usuario';

@Injectable()
export class DataService {

    constructor(private _router: Router) { }

    verificarSessao(): void{
        console.log('verificar sessao');
        
        let usrAluguelLegal   = localStorage.getItem('usrAluguelLegal');
        let tkAluguelLegal    = localStorage.getItem('tkAluguelLegal');
        let usrIdAluguelLegal = localStorage.getItem('usrIdAluguelLegal');

        console.log('usrAluguelLegal'  , usrAluguelLegal);
        console.log('tkAluguelLegal'   , tkAluguelLegal);
        console.log('usrIdAluguelLegal', usrIdAluguelLegal);
        console.log(!usrAluguelLegal, !tkAluguelLegal, !usrIdAluguelLegal);
        
        if(!usrAluguelLegal || !tkAluguelLegal || !usrIdAluguelLegal ){
            console.log('dentro do if');
            this._router.navigate(['']);
            return;
        }
    }

    registrarSessao(usuario: Usuario): void {
        localStorage.setItem('usrIdAluguelLegal', usuario.id.toString());
        localStorage.setItem('usrAluguelLegal', usuario.usuario);
        localStorage.setItem('tkAluguelLegal', usuario.token);
    }

    limparSessao(): void {
        localStorage.clear();
    }
    
}