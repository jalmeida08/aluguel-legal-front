import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { AdministracaoComponent } from './administracao/administracao.component';
import { CadastrarProprietarioComponent } from './administracao/manter-propietario/cadastrar/cadastrar-proprietario.component';
import { CadastrarUsuarioComponent } from './administracao/manter-usuario/cadastrar/cadastrar-usuario.component';
import { DetalheImovelComponent } from './administracao/manter-imovel/detalhe/detalhe-imovel.component';
import { UsuarioComponent } from './administracao/manter-usuario/usuario.component';
import { LoginComponent } from './area-publica/login/login.component';
import { ParticiparLocatarioAluguelLegalComponent } from './area-publica/participar-locatario-aluguel-legal/participar-locatario-aluguel-legal.component';

const appRoutes: Routes = [
    { path: '', component: LoginComponent},
    { path: 'home', component: HomeComponent},
    
    { path: 'quero-participar-aluguel-legal', component: ParticiparLocatarioAluguelLegalComponent},

    { path: 'administracao', component: AdministracaoComponent},
    { path: 'administracao/proprietario', component: CadastrarProprietarioComponent},
    { path: 'administracao/usuario',      component: CadastrarUsuarioComponent},
    { path: 'administracao/imovel/:id',   component: DetalheImovelComponent},
    { path: 'administracao/usuario/confirm/:chave_ativacao', component: UsuarioComponent},

    { path: '**', redirectTo: '' },
];

export const routing = RouterModule.forRoot(appRoutes);
