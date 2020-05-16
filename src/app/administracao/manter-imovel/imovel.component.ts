import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ComponentNavegacaoMenu } from 'src/app/_diretivas/menu-administracao/_model/componentes-navegacao-menu';
import { ListaComponentesMenu } from 'src/app/_diretivas/menu-administracao/_model/lista-componentesMenu';
import { Imovel } from 'src/app/_model/imovel';
import { ProprietarioService } from '../manter-propietario/proprietario.service';
import { Proprietario } from 'src/app/_model/proprietario';
import { StatusImovel } from 'src/app/_model/statusImovel';
import { ImovelService } from './imovel.service';
import { Router } from '@angular/router';

@Component({
    selector: 'imovel',
    templateUrl: 'imovel.component.html',
    styleUrls: ['./imovel.component.css']
})

export class ImovelComponent implements OnInit {

    public componentNavegacaoMenu: ComponentNavegacaoMenu = new ComponentNavegacaoMenu();
    public listaProprietarios:Array<Proprietario> = new Array<Proprietario>();
    public listaEnderecosAgrupados: Array<any> = new Array<any>();
    public imovel: Imovel = new Imovel();
    public imoveis: Array<Imovel>;
    public cep: string = '';

    constructor(
        private _proprietarioService: ProprietarioService,
        private _imovelService: ImovelService,
        private _router: Router,
    ) {}

    public listarImoveisEnderecoEspecificado(imovelSelecionado: Imovel) {
        if(this.checarSeBuscaImoveis(imovelSelecionado)){
            this.verificarElemetosDetailsAberto(imovelSelecionado.endereco);
            this._imovelService
                .listarImoveisEnderecoEspecificado(imovelSelecionado.endereco)
                .subscribe(res => {
                    this.imoveis = res;  
                });
        }
    }

    public adicionarLocatario(imovel: Imovel){
        
    }
    
    public abrirDetalheImovel(id: number){
        this._router.navigate([`administracao/imovel/${id}`]);
    }
    
    public receberEvento(string: string){
        this.listarProprietarios();
        this.imovel = new Imovel();
        this.cep = undefined;
        this.imovel.statusImovel = StatusImovel.DISPONIVEL;
    }
    
    public montarId(endereco: string):string{
        return endereco.replace(/\s/g, '');
    }
    
    private listarImovelsAgrupados() {
        this._imovelService
            .listarImovelsAgrupados()
            .subscribe(res => {
                this.listaEnderecosAgrupados = new Array<String>();
                this.listaEnderecosAgrupados = res;  
            });
    }
    
    private listarProprietarios(): void {
        this._proprietarioService
        .listarProprietarios()
        .subscribe( res =>{
            this.listaProprietarios = res;
        })
    }
    
    private montarMenuNavegacaoImovel(){
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

    private checarSeBuscaImoveis(imovelSelecionado: Imovel){
        if(!this.imoveis)
            return true;
        else if(this.verificarSeContemImovel(imovelSelecionado, this.imoveis))
            return true;
        else 
            return false;
    }
    
    private verificarElemetosDetailsAberto(enderecoAberto: string){
        let elementosDetails = document.getElementsByTagName("details");
        let elementosAberto = document.getElementById(this.montarId(enderecoAberto));
        for(let i=0; (elementosDetails.length - 1) >= i; i++){
            if(elementosDetails[i].id !== elementosAberto.id)
                document.getElementById(elementosDetails[i].id).removeAttribute('open');
        }

    }
    
    private verificarSeContemImovel(imovel: Imovel, imoveis: Array<Imovel>): Boolean{
        let retorno: Array<boolean> = imoveis.map(item => {
            return item.endereco.toLowerCase().trim() === imovel.endereco.toLowerCase().trim();
        });

        return retorno.indexOf(true) < 0;
    }

    ngOnInit() {
        this.montarMenuNavegacaoImovel();
        this.listarImovelsAgrupados();
    }
}