import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ComponentNavegacaoMenu } from 'src/app/_diretivas/menu-administracao/_model/componentes-navegacao-menu';
import { ListaComponentesMenu } from 'src/app/_diretivas/menu-administracao/_model/lista-componentesMenu';
import { ModalCadastroImovelComponent } from './modal/modal-cadastrar-imovel.component';
import { Imovel } from 'src/app/_model/imovel';
import { ProprietarioService } from '../manter-propietario/proprietario.service';
import { Proprietario } from 'src/app/_model/proprietario';
import { StatusImovel } from 'src/app/_model/statusImovel';
import { ImovelService } from './imovel.service';

@Component({
    selector: 'imovel',
    templateUrl: 'imovel.component.html'
})

export class ImovelComponent implements OnInit {

    public componentNavegacaoMenu: ComponentNavegacaoMenu = new ComponentNavegacaoMenu();
    public listaProprietarios:Array<Proprietario> = new Array<Proprietario>();
    public imovel: Imovel = new Imovel();
    public imoveis: Array<Imovel>;   

    constructor(
        private _proprietarioService: ProprietarioService,
        private _imovelService: ImovelService
    ) {}

    public listarImovel() {
        this._imovelService
            .listarImovel()
            .subscribe(res => {
                console.log(res);
                
                this.imoveis = res;  
            });
    }

    public montarMenuNavegacaoImovel(){
        let arrayListaComponentesMenu: Array<ListaComponentesMenu> = new Array<ListaComponentesMenu>();
        let adicionar: ListaComponentesMenu = {
            tituloBotao:'Adicionar',
            icone:'add_circle_outline',
            idModal:'#modalCadastrarImovel',
        };

        arrayListaComponentesMenu.push(adicionar);

        this.componentNavegacaoMenu = new ComponentNavegacaoMenu();
        this.componentNavegacaoMenu = {
            tituloMenu: 'Imóvel',
            listaComponentesMenu: arrayListaComponentesMenu
        };
        
    }

    public receberEvento(string: string){
        this.listarProprietarios();
        this.imovel = new Imovel();
        this.imovel.statusImovel = StatusImovel.DISPONIVEL;
    }

    public listarProprietarios(): void {
        this._proprietarioService
            .listarProprietarios()
            .subscribe( res =>{
                this.listaProprietarios = res;
            })
    }
    ngOnInit() {
        this.montarMenuNavegacaoImovel();
        this.listarImovel();
    }
}