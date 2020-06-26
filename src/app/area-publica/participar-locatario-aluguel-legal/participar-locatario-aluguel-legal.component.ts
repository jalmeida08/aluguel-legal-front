import { Component, OnInit } from '@angular/core';
import { Proprietario } from 'src/app/_model/proprietario';
import { Usuario } from 'src/app/_model/usuario';
import { UsuarioService } from 'src/app/administracao/manter-usuario/usuario.service';
import { DataService } from 'src/app/services/data.service';
import { ServiceNameService } from '../area-public.service';
import { Contato } from 'src/app/_model/contato';
import { Acesso } from 'src/app/_model/acesso';

@Component({
    selector: 'participar-locatario-aluguel-legal',
    templateUrl: 'participar-locatario-aluguel-legal.component.html'
})

export class ParticiparLocatarioAluguelLegalComponent implements OnInit {
    
    public proprietario: Proprietario = new Proprietario();
    public email: string = '';
    private usuario: Usuario = new Usuario();
    
    constructor(
        private _serviceNameService: ServiceNameService,
        private _dataService: DataService
        ) { }

    private validarCPF(cpf: string): boolean{
        if(!this._dataService.ValidarDeCpf(cpf)){
            this._dataService.alerta("O número de CPF informado é inválido", "warning", "Atenção!");
            return false;
        }
        return true;
    }
    
    public salvar(){
        this.limparMensagens();
        this.proprietario.usuario = new Usuario();
        this.proprietario.usuario.acesso = new Array<Acesso>();
        this.proprietario.contato = new Array<Contato>();
        this.proprietario.usuario.email = this.email;
        if(this.validarCPF(this.proprietario.numCpf.toString())){
            this._serviceNameService
                .salvarNovoParticipante(this.proprietario)
                .subscribe(res => {
                    this._dataService.alerta("O seu cadastro foi enviado para análise", "success", "Sucesso!");
                    this._dataService.alerta("Em instantes receberá um email para poder dar continuidade ao cadastro", "info", "Informação!");
                }, error => {
                    this._dataService.alerta(error.error, "danger", "Erro!");
                });

        }
            

    }

    private limparMensagens(){
        this._dataService.limparMensagens();
    }
    
    ngOnInit() { }
}