import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { Usuario } from 'src/app/_model/usuario';
import { Pessoa } from 'src/app/_model/pessoa';
import { timeoutWith } from 'rxjs/operators';

@Component({
    selector: 'cadastrar-usuario',
    templateUrl: 'cadastrar-usuario.component.html'
})

export class CadastrarUsuarioComponent implements OnInit {
    
    public usuario: Usuario = new Usuario();

    constructor(
        private _usuarioService: UsuarioService
    ) {
        this._usuarioService = _usuarioService
    }

    salvar() {
        let pessoa: Pessoa = new Pessoa();
        pessoa.id = 1;
        this.usuario.pessoa = pessoa;
        this._usuarioService
            .salvar(this.usuario)
            .subscribe(res => {
                console.log(res);
            }, error => {
                console.error(error);
            })
    }
    
    ngOnInit() { }
}