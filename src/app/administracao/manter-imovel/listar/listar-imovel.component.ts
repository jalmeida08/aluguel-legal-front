import { Component, OnInit } from '@angular/core';
import { ImovelService } from '../imovel.service';

@Component({
    selector: 'listar-imovel',
    templateUrl: 'listar-imovel.component.html'
})

export class ListarImovelComponent implements OnInit {

    constructor(private _imovelService: ImovelService) { }

    // public listarImovel() {
    //     this._imovelService
    //         .listarImovel()
    //         .subscribe()
    // }
    
    ngOnInit() { }
}