import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { urlBase } from 'src/app/_model/urlBase';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class LocatarioService {

    constructor(private http: HttpClient) { }

    // urlBase.url + 'locatario/listar-locatarios-ativos'
    listarLocatario() : Observable<any> {
        return this.http
            .get(
                urlBase.url + 'proprietario/listar-propeitarios'
            ).pipe(
                map( res => {
                    return res;
                })
            );

    }
}