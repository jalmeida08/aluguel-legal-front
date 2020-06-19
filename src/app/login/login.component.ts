import { Component, OnInit } from '@angular/core';
import { Usuario } from '../_model/usuario';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { AppComponent } from '../app.component';

@Component({
    selector: 'login-name',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

    public usuario: Usuario = new Usuario();
    

    constructor(
        private _loginService: LoginService,
        private _dataService: DataService,
        private _router: Router,
    ) {
        this._loginService = _loginService;
        this._dataService  = _dataService;
    }
    

    salvar() : void {
        this._dataService.limparMensagens();
        this._loginService
            .login(this.usuario)
            .subscribe( res => {
                console.warn(res);
                this._dataService.registrarSessao(res)
                this._router.navigate(["home"]);
            }, error => {
                console.error(error);
                this._dataService.alerta(error.error, "danger", "Erro! ");
            });
    }

    ngOnInit() {
        this.usuario.usuario = "admin";
        this.usuario.senha = "123123";
    }
}