import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Imovel } from 'src/app/_model/imovel';
import { urlBase } from 'src/app/_model/urlBase';

@Injectable()
export class ImovelService {

    constructor(
        private _http: HttpClient
    ) { }

    public buscadorCep(cep: string): Observable<any> {
        return this._http
            .get(`https://viacep.com.br/ws/${cep}/json/`)
            .pipe(
                map( res => {
                    return res;
                })
            );
    }

    public salvar(imovel: Imovel): Observable<any> {
        return this._http
            .post(`${urlBase.url}/imovel/salvar`, imovel)
            .pipe(
                map( res => {
                    return res;
                })
            );
    }

    public listarImoveisEnderecoEspecificado(endereco: string): Observable<any>{
        return this._http
            .post(`${urlBase.url}/imovel/listar-imoveis-endereco-especificado`, endereco)
            .pipe(
                map(res => {
                    return res
                })
            )
    }

    public listarImovelsAgrupados(): Observable<any>{
        return this._http
            .get(`${urlBase.url}/imovel/buscar-enderecos-agrupados`)
            .pipe(
                map(res => {
                    return res
                })
            )
    }

    public buscarImovelId(id: number): Observable<any> {
        return this._http
            .get(`${urlBase.url}/imovel/${id}`)
            .pipe(
                map(res => {
                    return res
                })
            )
    } 

}