import { NgModule } from '@angular/core';
import { MenuAdministracaoComponent } from './menu-administracao/menu-administracao.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    imports: [BrowserModule],
    exports: [MenuAdministracaoComponent],
    declarations: [MenuAdministracaoComponent],
    providers: [],
})
export class DiretivaModule { }
