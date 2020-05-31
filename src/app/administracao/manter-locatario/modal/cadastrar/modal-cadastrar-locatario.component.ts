import { Component, OnInit, Input } from '@angular/core';
import { Locatario } from 'src/app/_model/locatario';
import { Contato } from 'src/app/_model/contato';
import { TipoTelefone } from 'src/app/_model/TipoTelefone';
import { LocatarioService } from '../../locatario.service';

@Component({
    selector: 'modal-cadastrar-locatario',
    templateUrl: 'modal-cadastrar-locatario.component.html'
})

export class ModalCadastrarLocatarioComponent implements OnInit {
    
    @Input() public locatario: Locatario = new Locatario();
    @Input() public telaDadosLocatario: Boolean;
    @Input() public telaContatoLocatario: Boolean;
    @Input() public btnAvancar: Boolean;
    @Input() public btnSalvar: Boolean;
    public listaTipoTelefone = new Array<TipoTelefone>();
    public contato: Contato = new Contato();

    
    constructor(
        private _locatarioService: LocatarioService
    ) {
        this._locatarioService = _locatarioService;
    }

    public habilitarTelaAddContato() {
        this.btnAvancar = false;
        this.btnSalvar = true;
        this.telaDadosLocatario = false;
        this.telaContatoLocatario = true;
        this.contato = new Contato();
        this.contato.tipoTelefone = "";
        this.popularTipoTelefone();
    }

    public adicionarOutroTelefone(){
        this.locatario.contato.push(this.contato);
        console.log(this.contato);
        
        this.contato = new Contato();
    }
    
    public salvar(){
        this.validarContato();
        this._locatarioService
            .salvarLocatario(this.locatario)
            .subscribe(res => {
                console.log(res);
            })
        console.log(this.locatario);
    }

    private validarContato(){        
        if(this.contato.numTelefone && this.contato.tipoTelefone){
            this.locatario.contato.push(this.contato)
        }
    }

    private popularTipoTelefone(){
        let tpCel: TipoTelefone = new TipoTelefone(1, "Celular");
        let tpTelFixo: TipoTelefone = new TipoTelefone(2, "Telefone Fixo");

        this.listaTipoTelefone.push(tpCel, tpTelFixo);
    }
    
    ngOnInit() {
        
    }
}