import { Component, OnInit, Input } from '@angular/core';
import { Locatario } from 'src/app/_model/locatario';

@Component({
    selector: 'modal-cadastrar-locatario',
    templateUrl: 'modal-cadastrar-locatario.component.html'
})

export class ModalCadastrarLocatarioComponent implements OnInit {
    
    @Input() public locatario: Locatario = new Locatario();
    @Input() public telaDadosLocatario;
    @Input() public telaContatoLocatario;
    @Input() public btnAvancar;
    @Input() public btnSalvar;
    
    constructor() { }

    public habilitarTelaAddContato() {
        this.btnAvancar = false;
        this.btnSalvar = true;
        this.telaDadosLocatario = false;
        this.telaContatoLocatario = true;
    }

    
    
    ngOnInit() {
        this.btnAvancar = true;
        this.telaDadosLocatario = true;
    }
}