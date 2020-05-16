import { Component, OnInit, Input } from '@angular/core';
import { Imovel } from 'src/app/_model/imovel';
import { ImovelService } from '../imovel.service';
import { Proprietario } from 'src/app/_model/proprietario';
import { Pessoa } from 'src/app/_model/pessoa';

@Component({
    selector: 'modal-cadastro-imovel',
    templateUrl: 'modal-cadastrar-imovel.component.html',
    styleUrls: ['./../imovel.component.css']
})

export class ModalCadastroImovelComponent implements OnInit {

    @Input() public imovel: Imovel = new Imovel();
    @Input() public listaProprietarios: Array<Proprietario> = new Array<Proprietario>();
    @Input() public cep: string = '';
    public pessoaSelecionada: Pessoa = new Pessoa();

    constructor (private _imoveService: ImovelService) {}

    public salvar(): void {
        this.imovel.pessoa.push(this.pessoaSelecionada);        
        this._imoveService
            .salvar(this.imovel)
            .subscribe(res => {
                console.log(res);
            });
    }

    public buscarCep(): void {
        if(this.cep.replace(/\D/g, '').length === 8){
            this._imoveService
                .buscadorCep(this.cep)
                .subscribe(res => {
                    this.montarEndereco(res);
                });
        }
    }
    
    private montarEndereco(res) {
        const bairro: string = res.bairro.indexOf("(") 
            ? res.bairro.substring(0, res.bairro.indexOf("(")).trim()
            : res.bairro;

        const cidade: string =  res.bairro.indexOf("(") 
            ? res.bairro.substring((res.bairro.indexOf("(") + 1), res.bairro.indexOf(")"))
            : '';
            
        this.imovel = {
            ... new Imovel(),
            cep: res.cep.replace(/\D/g, ''),
            endereco: res.logradouro,
            bairro: bairro,
            cidade: cidade,
            estado: res.localidade,
        };
    }

    ngOnInit() {
    }

}