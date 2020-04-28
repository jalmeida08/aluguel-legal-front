import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { urlBase } from 'src/app/_model/urlBase';
import { map } from 'rxjs/operators';
import { Proprietario } from 'src/app/_model/proprietario';

@Injectable()
export class ProprietarioService {

    constructor(private _http: HttpClient) {}

    salvar (proprietario: Proprietario): Observable<any> {
        return this._http
            .post(`${urlBase.url}/proprietario/salvar`, proprietario)
            .pipe(
                map( res => {
                    console.log(res);
                    return res;
                })
            );
    }

    listarProprietarios(): Observable<any>{
        return this._http
            .get(`${urlBase.url}/proprietario/listar-proprietarios`)
            .pipe(
                map ( res => {
                    return res;
                })
            );
    }

}