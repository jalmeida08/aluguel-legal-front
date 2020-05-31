import { Component, OnInit } from '@angular/core';
import { ComponentNavegacaoMenu } from 'src/app/_diretivas/menu-administracao/_model/componentes-navegacao-menu';
import { ListaComponentesMenu } from 'src/app/_diretivas/menu-administracao/_model/lista-componentesMenu';
import { Locatario } from 'src/app/_model/locatario';


@Component({
    selector: 'locatario',
    templateUrl: 'locatario.component.html'
})

export class LocatarioComponent implements OnInit {

    public componentNavegacaoMenu: ComponentNavegacaoMenu = new ComponentNavegacaoMenu();
    public locatario: Locatario = new Locatario();
    public telaDadosLocatario: Boolean;
    public telaContatoLocatario: Boolean;
    public btnAvancar: Boolean;
    public btnSalvar: Boolean;
    constructor() { }

    public receberEvento(){
        this.telaDadosLocatario   = new Boolean(true);
        this.telaContatoLocatario = new Boolean(false);
        this.btnAvancar           = new Boolean(true);
        this.btnSalvar            = new Boolean(false);
        this.locatario            = new Locatario();
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