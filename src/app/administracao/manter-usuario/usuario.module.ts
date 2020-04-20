import { NgModule } from '@angular/core';

import { UsuarioComponent } from './usuario.component';
import { CadastrarUsuarioComponent } from './cadastrar/cadastrar-usuario.component';
import { FormsModule } from '@angular/forms';
import { UsuarioService } from './usuario.service';

@NgModule({
    imports: [
        FormsModule
    ],
    exports: [
        UsuarioComponent,
        CadastrarUsuarioComponent
    ],
    declarations: [
        UsuarioComponent,
        CadastrarUsuarioComponent
    ],
    providers: [UsuarioService],
})
export class UsuarioModule { }
