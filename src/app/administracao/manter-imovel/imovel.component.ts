import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ComponentNavegacaoMenu } from 'src/app/_diretivas/menu-administracao/_model/componentes-navegacao-menu';
import { ListaComponentesMenu } from 'src/app/_diretivas/menu-administracao/_model/lista-componentesMenu';
import { Imovel } from 'src/app/_model/imovel';
import { ProprietarioService } from '../manter-propietario/proprietario.service';
import { Proprietario } from 'src/app/_model/proprietario';
import { StatusImovel } from 'src/app/_model/statusImovel';
import { ImovelService } from './imovel.service';
import { Router } from '@angular/router';
import { Locatario } from 'src/app/_model/locatario';
import { Despesa } from 'src/app/_model/despesa';
import { DataService } from 'src/app/services/data.service';
declare var $: any;

@Component({
    selector: 'imovel',
    templateUrl: 'imovel.component.html',
    styleUrls: ['./imovel.component.css']
})

export class ImovelComponent implements OnInit {

    public componentNavegacaoMenu: ComponentNavegacaoMenu = new ComponentNavegacaoMenu();
    public listaProprietarios:Array<Proprietario> = new Array<Proprietario>();
    public listaEnderecosAgrupados: Array<any> = new Array<any>();
    public listaProvaveisLocatarios: Array<Locatario> = new Array<Locatario>();
    public listaProvaveisLocatarioSelecionado: Array<Locatario> = new Array<Locatario>();
    public imoveis: Array<Imovel> = new Array<Imovel>();;
    public imovel: Imovel = new Imovel();
    public cep: String = new String("");
    public imovelSelecionadoProvavelLocatario: Imovel = new Imovel();
    public locatarioSelecionado: Locatario = new Locatario();
    public despesa: Despesa = new Despesa();
    public modalTela1: boolean = false;
    public modalTela2: boolean = false;
    public despesaPaga: boolean = false;

    constructor(
        private _proprietarioService: ProprietarioService,
        private _imovelService: ImovelService,
        private _router: Router,
        private _dataService: DataService
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

    public selecionarProvavelLocatario(locatario: Locatario){
        this.locatarioSelecionado = locatario;
    }
    
    public abrirDetalheImovel(id: number){
        this._router.navigate([`administracao/imovel/${id}`]);
    }
    
    public receberEvento(){
        this.listarProprietarios();
        this.cep = new String("");
        this.imovel = new Imovel();
        this.imovel.statusImovel = StatusImovel.DISPONIVEL;
        console.log(this.cep, 'CEP');
        
    }
    
    public montarId(endereco: string):string{
        return endereco.replace(/\s/g, '');
    }

    public abrirModal(idModal, imovel: Imovel){
        this.listaProvaveisLocatarios = new Array<Locatario>();
        this.listaProvaveisLocatarioSelecionado = new Array<Locatario>();
        this.locatarioSelecionado = new Locatario();
        this.modalTela1 = true;
        this.modalTela2 = false;
        
        $(idModal).modal('show');
        this.imovelSelecionadoProvavelLocatario = imovel;
        this._imovelService
            .listarPossiveisLocatarios()
            .subscribe( res => {
               this.listaProvaveisLocatarios = res;
            });
    }
    
    public adicionarProvavelLocatario(locatarioSelecionado: Locatario){
        if(this.listaProvaveisLocatarios.indexOf(locatarioSelecionado) < 0) return;
        this.listaProvaveisLocatarioSelecionado.push(locatarioSelecionado);
        this.listaProvaveisLocatarios = this.listaProvaveisLocatarios.filter(
            (item : Locatario) => {
                return item !== locatarioSelecionado;
            });
        this.locatarioSelecionado = new Locatario();
    }

    public removerProvavelLocatario(locatarioSelecionado: Locatario){
        if(this.listaProvaveisLocatarioSelecionado.indexOf(locatarioSelecionado) < 0) return;
        this.listaProvaveisLocatarios.push(locatarioSelecionado);
        this.listaProvaveisLocatarioSelecionado = this.listaProvaveisLocatarioSelecionado.filter(
            (item: Locatario) => {
                return item !== locatarioSelecionado;
            });
        this.locatarioSelecionado = new Locatario();
    }

    public avancarTela(){
        if(this.modalTela1 === true){
            this.modalTela1 = false;
            this.modalTela2 = true;
            this.despesa = new Despesa();
            this.despesaPaga = false;
        }else if(this.modalTela2 === true){
            this.modalTela1 = false;
            this.modalTela2 = false;
        }
    }

    public voltarTela(){
        if(this.modalTela2 === true){
            this.modalTela1 = true;
            this.modalTela2 = false;
        }
    }
    
    public receberEventoAtualizarLista(){
        this.listarImovelsAgrupados();
    }
    
    private listarImovelsAgrupados() {
        this._imovelService
            .listarImovelsAgrupados()
            .subscribe(res => {
                this.listaEnderecosAgrupados = new Array<String>();
                this.listaEnderecosAgrupados = res;  
            }, error => {
                this._dataService.alerta(error, "danger", "Erro! ");
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