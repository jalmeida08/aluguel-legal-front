import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AdministracaoComponent } from './administracao/administracao.component';
import { CadastrarProprietarioComponent } from './administracao/manter-propietario/cadastrar/cadastrar-proprietario.component';
import { CadastrarUsuarioComponent } from './administracao/manter-usuario/cadastrar/cadastrar-usuario.component';

const appRoutes: Routes = [
    { path: '', component: LoginComponent},
    { path: 'home', component: HomeComponent},
    { path: 'administracao', component: AdministracaoComponent},
    
    { path: 'administracao/proprietario', component: CadastrarProprietarioComponent},
    { path: 'administracao/usuario', component: CadastrarUsuarioComponent},

    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
