import { Component, OnInit } from '@angular/core';
import { ProprietarioService } from '../proprietario.service';
import { Proprietario } from 'src/app/_model/proprietario';


@Component({
    selector: 'cadastra-proprietario',
    templateUrl: 'cadastrar-proprietario.component.html'
})

export class CadastrarProprietarioComponent implements OnInit {

    public proprietario: Proprietario = new Proprietario();

    
    constructor(
        private _ProprietarioService: ProprietarioService
    ) {
        this._ProprietarioService = _ProprietarioService;
    }

    public salvar(): void{
        this._ProprietarioService
            .salvar(this.proprietario)
            .subscribe(res => {
                console.log(res);
            }, error => {
                console.error(error);
            });
    }

    ngOnInit() { }
    
}