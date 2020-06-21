import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { Usuario } from 'src/app/_model/usuario';
import { Pessoa } from 'src/app/_model/pessoa';
import { timeoutWith } from 'rxjs/operators';
import { DataService } from 'src/app/services/data.service';

@Component({
    selector: 'cadastrar-usuario',
    templateUrl: 'cadastrar-usuario.component.html'
})

export class CadastrarUsuarioComponent implements OnInit {
    
    public usuario: Usuario = new Usuario();

    constructor(
        private _usuarioService: UsuarioService,
        private _dataService: DataService
    ) { }

    salvar() {
        let pessoa: Pessoa = new Pessoa();
        pessoa.id = 1;
        this.usuario.pessoa = pessoa;
        this._usuarioService
            .salvar(this.usuario)
            .subscribe(res => {
                this._dataService.alerta("Salvo com sucesso", "success", "Sucesso!");
                this._dataService.alerta("Enviamos um email com informações para ativação do seu usuário", "info", "Informação");
            }, error => {
                console.error(error);
            })
    }
    
    ngOnInit() { }
}