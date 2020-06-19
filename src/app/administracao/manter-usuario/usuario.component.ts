import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from './usuario.service';
import { DataService } from 'src/app/services/data.service';

@Component({
    selector: 'usuaraio',
    templateUrl: 'usuario.component.html'
})

export class UsuarioComponent implements OnInit {
    constructor(
        private _routerParam: ActivatedRoute,
        private _usuarioService: UsuarioService,
        private _router: Router,
        private _dataService: DataService,
    ) {}

    private ativarUsuario(chaveAtivacao: string){
        this._usuarioService
            .ativarUsuarioPorChave(chaveAtivacao)
            .subscribe( res => {
                console.log(res);
                this._dataService.registrarSessao(res)
                this._router.navigate(['administracao/']);
            }, error => {
                console.error(error);                
            });
    }

    private verificarParametroConfirmacaoUsuario(){
        let chaveAtivacao: string = '';
        this._routerParam.params.subscribe(params => chaveAtivacao = params['chave_ativacao']);
        if(chaveAtivacao){
            this.ativarUsuario(chaveAtivacao);
        }
    }

    ngOnInit() {
        this.verificarParametroConfirmacaoUsuario();
    }
}