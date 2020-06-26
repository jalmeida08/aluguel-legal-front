import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { urlBase } from '../_model/urlBase';
import { Proprietario } from '../_model/proprietario';
import { map } from 'rxjs/operators';

@Injectable()
export class ServiceNameService {

    constructor(private _http: HttpClient) { }
    
    public salvarNovoParticipante(p: Proprietario): Observable<any>{
        console.log(p);
        
        return this._http
            .post(`${urlBase.url}/proprietario/quero-participar-algueguel-legal`, p)
            .pipe(map(res =>{ return res;}))
    }

}