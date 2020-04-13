import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
    { path: '', component: LoginComponent},
    { path: 'home', component: HomeComponent},

    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
