import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { urlBase } from 'src/app/_model/urlBase';
import { map } from 'rxjs/operators';
import { Proprietario } from 'src/app/_model/proprietario';

@Injectable()
export class ProprietarioService {

    constructor(private http: HttpClient) {}

    salvar (proprietario: Proprietario): Observable<any> {

        console.log(proprietario);
        return this.http
            .post(urlBase.url + 'proprietario/salvar', proprietario)
            .pipe(
                map( res => {
                    console.log(res);
                    return res;
                })
            );
    } 

}