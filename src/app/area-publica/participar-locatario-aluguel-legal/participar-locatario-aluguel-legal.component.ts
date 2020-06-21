import { Component, OnInit } from '@angular/core';
import { Proprietario } from 'src/app/_model/proprietario';
import { Usuario } from 'src/app/_model/usuario';
import { UsuarioService } from 'src/app/administracao/manter-usuario/usuario.service';
import { DataService } from 'src/app/services/data.service';

@Component({
    selector: 'participar-locatario-aluguel-legal',
    templateUrl: 'participar-locatario-aluguel-legal.component.html'
})

export class ParticiparLocatarioAluguelLegalComponent implements OnInit {
    
    public proprietario: Proprietario = new Proprietario();
    public email: string = '';
    private usuario: Usuario = new Usuario();
    
    constructor(
        private _usuarioService: UsuarioService,
        private _dataService: DataService
        ) { }

    private validarCPF(cpf: string): boolean{
        if(this._dataService.ValidarDeCpf(cpf)){
            this._dataService.alerta("O número de CPF informado é inválido", "warn", "Atenção!")
            return false;
        }
        return true;
    }
    
    public salvar(){
        if(this.validarCPF(this.proprietario.numCpf.toString()))
            return;
        s

    }



    ngOnInit() { }
}