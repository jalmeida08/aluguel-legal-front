import { Component, OnInit } from '@angular/core';
import { ComponentNavegacaoMenu } from 'src/app/_diretivas/menu-administracao/_model/componentes-navegacao-menu';
import { ListaComponentesMenu } from 'src/app/_diretivas/menu-administracao/_model/lista-componentesMenu';


@Component({
    selector: 'locatario',
    templateUrl: 'locatario.component.html'
})

export class LocatarioComponent implements OnInit {

    public componentNavegacaoMenu: ComponentNavegacaoMenu = new ComponentNavegacaoMenu();
    public telaDadosLocatario: boolean;
    public telaContatoLocatario: boolean;
    public btnAvancar: boolean;
    public btnSalvar: boolean;
    constructor() { }

    public receberEvento(){
        console.log("RECEBENDO");
        this.telaDadosLocatario   = true;
        this.telaContatoLocatario = false;
        this.btnAvancar           = true;
        this.btnSalvar            = false;
    }

    private montarMenuNavegacaoImovel(){
        let arrayListaComponentesMenu: Array<ListaComponentesMenu> = new Array<ListaComponentesMenu>();
        let adicionar: ListaComponentesMenu = {
            tituloBotao:'Adicionar',
            icone:'add_circle_outline',
            idModal:'#modalCadastrarLocatario',
        };

        arrayListaComponentesMenu.push(adicionar);

        this.componentNavegacaoMenu = new ComponentNavegacaoMenu();
        this.componentNavegacaoMenu = {
            tituloMenu: 'Locatário',
            listaComponentesMenu: arrayListaComponentesMenu
        };
    }

    
    ngOnInit() {
        this.montarMenuNavegacaoImovel();
    }
}