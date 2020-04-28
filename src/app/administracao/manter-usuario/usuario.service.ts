import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from 'src/app/_model/usuario';
import { urlBase } from 'src/app/_model/urlBase';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class UsuarioService {

    constructor(private http: HttpClient) { }

    salvar (usuario: Usuario): Observable<any>{
        console.log(usuario);
        
        return this.http
            .post(`${urlBase.url}/usuario/salvar`, usuario)
            .pipe( map( res => { return res; } ) );
    }
}