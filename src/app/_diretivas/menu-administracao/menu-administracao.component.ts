import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ComponentNavegacaoMenu } from './_model/componentes-navegacao-menu';
declare var $: any;

@Component({
    selector: 'menu-administracao',
    templateUrl: 'menu-administracao.component.html'
})

export class MenuAdministracaoComponent implements OnInit {
    
    @Input() componentNavegacaoMenu: ComponentNavegacaoMenu = new ComponentNavegacaoMenu();
    @Output() public emitterNewInstanceObjectImovel = new EventEmitter();
    @Output() public emitterNewInstanceLocatario = new EventEmitter();

    constructor() {
    }

    public abrirModal(idModal: string) : void {
        this.checarEmissaoEvento(idModal);
        $(idModal).modal('show');
    }
    
    public checarEmissaoEvento(idModal){
        console.log("EMITINDO", idModal);
        
        if(idModal === '#modalCadastrarImovel')
            this.emitterNewInstanceObjectImovel.emit();
        else if (idModal === '#modalCadastrarLocatario')
            this.emitterNewInstanceLocatario.emit();
    }

    ngOnInit() {}

}