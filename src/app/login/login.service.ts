import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { urlBase } from '../_model/urlBase';
import { Usuario } from '../_model/usuario';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class LoginService {
    
    constructor(private http: HttpClient) { }

    login (usuario: Usuario) : Observable<any> {
        return this.http
            .post(
                urlBase.url + 'usuario/login', 
                usuario
            ).pipe(
                map( user => {
                    if( user && usuario.token )
                        console.log(user);
                    return user;
                })
            );

    }
}