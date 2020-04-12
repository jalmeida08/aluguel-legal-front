import { Component, OnInit } from '@angular/core';
import { Usuario } from '../_model/usuario';
import { LoginService } from './login.service';
import { Alerta } from '../_diretivas/alerta/alerta';

@Component({
    selector: 'login-name',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

    public usuario: Usuario = new Usuario();
    private alertas: Array<Alerta> = new Array<Alerta>();

    constructor(private _loginService: LoginService) {
        this._loginService = _loginService;
    }
    // RESPONSAVEL POR DISPARAR AS MENSAGENS NA TELA
    public alerta(
        mensagem: string,
        tipoMensagem: string,
        mensagemDestaque: string) {
        this.alertas.push(
            {
                mensagem: mensagem,
                tipoMensagem: tipoMensagem,
                mensagemDestaque: mensagemDestaque
            }
        );
    }

    salvar() : void {
        this._loginService
            .login(this.usuario)
            .subscribe( res => {
                console.warn(res);
            }, error => {
                console.error(error);
                this.alerta(error.error, "danger", "Erro! ");
            });
    }

    ngOnInit() {
        this.usuario.usuario = "admin";
        this.usuario.senha = "123123";
    }
}