import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from 'src/app/_model/usuario';
import { urlBase } from 'src/app/_model/urlBase';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class UsuarioService {

    constructor(private _http: HttpClient) { }

    public salvar (usuario: Usuario): Observable<any>{
        console.log(usuario);
        
        return this._http
            .post(`${urlBase.url}/usuario/salvar-user-proprietario`, usuario)
            .pipe( map( res => { return res; } ) );
    }

    public salvarUsuarioLocatario (usuario: Usuario): Observable<any>{
        console.log(usuario);
        
        return this._http
            .post(`${urlBase.url}/usuario/salvar-user-locatario`, usuario)
            .pipe( map( res => { return res; } ) );
    }
    public ativarUsuarioPorChave (chaveAtivacao: string): Observable<any> {
        return this._http
            .get(`${urlBase.url}/usuario/ativar-chave-usuario/${chaveAtivacao}`)
            .pipe( map(
                res => { return res; }
            ));
    }


}