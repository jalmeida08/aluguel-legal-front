import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { urlBase } from 'src/app/_model/urlBase';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Locatario } from 'src/app/_model/locatario';

@Injectable()
export class LocatarioService {

    constructor(private http: HttpClient) { }

    // urlBase.url + 'locatario/listar-locatarios-ativos'
    public listarLocatarioAtivos() : Observable<any> {
        return this.http
            .get( `${urlBase.url}/locatario/listar-locatarios-ativos`)
            .pipe(
                map( res => {
                    return res;
                })
            );
    }

    public listarPossiveisLocatarios(): Observable<any>{
        return this.http
            .get(`${urlBase.url}/locatario/lista-possiveis-locatarios`)
            .pipe(
                map( res => {
                    return res;
                })
            );
    }

    public salvarLocatario(locatario: Locatario): Observable<any>{
        return this.http
            .post(`${urlBase.url}/locatario/salvar`, locatario)
            .pipe(
                map( res => {
                    return res;
                })
            )
    }

}