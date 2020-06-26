import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Imovel } from 'src/app/_model/imovel';
import { ImovelService } from '../../imovel.service';
import { Proprietario } from 'src/app/_model/proprietario';
import { Pessoa } from 'src/app/_model/pessoa';
import { StatusImovel } from 'src/app/_model/statusImovel';
import { DataService } from 'src/app/services/data.service';
declare var $: any;

@Component({
    selector: 'modal-cadastro-imovel',
    templateUrl: 'modal-cadastrar-imovel.component.html',
    styleUrls: ['./../../imovel.component.css']
})

export class ModalCadastroImovelComponent implements OnInit {

    @Input() public imovel: Imovel = new Imovel();
    @Input() public listaProprietarios: Array<Proprietario> = new Array<Proprietario>();
    @Input() public cep: String = new String("");
    @Output() public emitterUpdateListImovel = new EventEmitter();
    public statusImovel: StatusImovel;
    public listaImovel: Array<Imovel> = new Array<Imovel>();

    public pessoaSelecionada: Pessoa = new Pessoa();

    constructor (
        private _imoveService: ImovelService,
        private _dataService: DataService
    ) {}

    public buscarCep(): void {
        if(this.cep.replace(/\D/g, '').length === 8){
            this._imoveService
                .buscadorCep(this.cep)
                .subscribe(res => {
                    this.montarEndereco(res);
                    this.emitterUpdateListImovel.emit();
                });
        }
    }

    public salvar(): void {
        console.warn('CHAMDNO SALVAR', this.listaImovel);
        this._imoveService
            .salvar(this.listaImovel)
            .subscribe( () => {
                this._dataService.alerta("Salvo com sucesso.", "success", "Sucesso!");
                $('modalCadastrarImovel').modal('hide');
            });
    }
  
    public adicionarMaisParaEsseEndereco(): void{
        let pessoa: Pessoa = new Pessoa();
        this.imovel.pessoa.push(this.pessoaSelecionada);
        this.listaImovel.push(this.imovel);

        let cep          = this.imovel.cep;
        let proprietario = this.imovel.pessoa;
        let numero       = this.imovel.numero;

        this.imovel = new Imovel();
        this.imovel.cep = cep;
        this.buscarCep();
        this.imovel.numero = numero;
        this.imovel.pessoa = proprietario;

        this.limparCamposParaNovasUnidades();
    }
    
    private limparCamposParaNovasUnidades(){
        this.imovel.complemento = '';
        this.imovel.statusImovel = StatusImovel.DISPONIVEL;
    }
    
    private montarEndereco(res) {
        let bairro: string = res.bairro.indexOf("(") 
            ? res.bairro.substring(0, res.bairro.indexOf("(")).trim()
            : res.bairro;

        let cidade: string =  res.bairro.indexOf("(") 
            ? res.bairro.substring((res.bairro.indexOf("(") + 1), res.bairro.indexOf(")"))
            : '';
            
        this.imovel = {
            ... new Imovel(),
            cep: res.cep.replace(/\D/g, ''),
            endereco: res.logradouro,
            bairro: bairro,
            cidade: cidade,
            estado: res.localidade,
            statusImovel: StatusImovel.DISPONIVEL
        };
    }

    ngOnInit() {
    }

}