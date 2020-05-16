import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImovelService } from '../imovel.service';
import { Imovel } from 'src/app/_model/imovel';

@Component({
    selector: 'detalhe-imovel',
    templateUrl: 'detalhe-imovel.component.html'
})

export class DetalheImovelComponent implements OnInit {

    public imovel: Imovel = new Imovel();
    
    constructor(
        private _router: ActivatedRoute,
        private _imoveService: ImovelService
    ) {}

    private buscarImovelId(){
        let id = this.recuperarRouterParam();
        this._imoveService
            .buscarImovelId(id)
            .subscribe(res => {
                this.imovel = res;
            })
    }

    private recuperarRouterParam(): number{
        let id: number;
        this._router.params.subscribe(params => id = params['id']);
        return id;
    }

    
    ngOnInit() {
        this.buscarImovelId();
    }
}