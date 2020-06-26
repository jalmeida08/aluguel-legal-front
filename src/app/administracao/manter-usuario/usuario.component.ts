import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from './usuario.service';
import { DataService } from 'src/app/services/data.service';
import { Usuario } from 'src/app/_model/usuario';

@Component({
    selector: 'usuaraio',
    templateUrl: 'usuario.component.html'
})

export class UsuarioComponent implements OnInit {
    
    private chaveAtivacao: string = '';
    public locatario: boolean = false;
    public proprietario: boolean = false;
    public usuario: Usuario = new Usuario();
    public min;
    public seg;

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
                this._dataService.registrarSessao(res)
                this._router.navigate(['administracao/']);
            }, error => {
                console.error(error);                
            });
    }

    public finalizarCadastroUsuario(){
        this.limparMensagem();
        this._usuarioService
            .finalizarCadastroUsuario(this.usuario)
            .subscribe(res => {
                this._dataService.alerta("Dados cadastrado com sucesso", "success", "Sucesso!");
                this._router.navigate(['home/']);
            }, error => {
                this._dataService.alerta(error, "danger", "Erro!");
            });
    }
    
    private buscarInformacoesPorChaveAtivacao(){
        this._usuarioService
            .buscarInformacoesPorChaveAtivacao(this.chaveAtivacao.substring(1))
            .subscribe(res => {
                this.limparMensagem();
                this.usuario = res;
                this._dataService.alerta("Por favor, preencha os dados para seguir com o cadastro", "info", "Informação!");
            }, error => {
                this.limparMensagem();
                this._dataService.alerta(error, "danger", "Erro!");
                this._dataService.alerta("Por favor, entre em contato com a equipe de suporte", "info", "Informação!");
            })
    }
    
    private verificarParametroConfirmacaoUsuario(){
        this.limparMensagem();
        this._routerParam.params.subscribe(params => this.chaveAtivacao = params['chave_ativacao']);
        if(!this.chaveAtivacao)
            this._dataService.alerta("Atenção, Você não possui uma chave de ativação, será redirecionado para a página inicial","warning","Ops!")
        
        let caracterInicialChaveAtivação = this.chaveAtivacao.substring(0,1);
        this.contador();
        switch (caracterInicialChaveAtivação) {
            case 'L':
                this.locatario = true;
                break;
            case 'P':
                this.proprietario = true;
                break;
            default:
                this.contador();
                this._dataService.alerta("Atenção, Você não possui uma chave de ativação, será redirecionado para a página inicial","warning","Ops!")
                this._dataService.alerta("Você será redirecionado para a página inicial","infor","Informação!")
                break;
        }
        
        this.buscarInformacoesPorChaveAtivacao();
        // this.ativarUsuario(chaveAtivacao);
    }

    private contador(){
        this.min = 1;
        this.seg = 1	
        if((this.min > 0) || (this.seg > 0)){				
            if(this.seg == 0){					
                this.seg = 59;					
                this.min = this.min - 1	
            }				
            else{					
                this.seg = this.seg - 1;				
            }				
            if(this.min.toString().length == 1){					
                this.min = "0" + this.min;				
            }				
            if(this.seg.toString().length == 1){					
                this.seg = "0" + this.seg;				
            }				
            document.getElementById('spanRelogio').innerHTML = this.min + ":" + this.seg;
            setTimeout("contador()", 1000);			
        }			
        else{				
            document.getElementById('spanRelogio').innerHTML = "00:00";			
        }		
    }	
    
    private limparMensagem(){
        this._dataService.limparMensagens();
    }

    ngOnInit() {
        this.verificarParametroConfirmacaoUsuario();
    }
}