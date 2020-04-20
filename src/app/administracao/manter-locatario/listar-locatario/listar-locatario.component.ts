import { Component, OnInit } from '@angular/core';
import { LocatarioService } from '../locatario-service';

@Component({
    selector: 'locatario-listar',
    templateUrl: 'listar-locatario.component.html'
})

export class ListarLocatarioComponent implements OnInit {

    constructor(
        private _locatarioService: LocatarioService
    ) {
        this._locatarioService = _locatarioService;
    }

    public listar(){
        this._locatarioService
            .listarLocatario()
            .subscribe( res => {
                console.warn(res);
            }, error => {
                console.error(error);
            });
    }

    ngOnInit() {
        this.listar();
    }
}