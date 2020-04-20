import { NgModule } from '@angular/core';

import { AdministracaoComponent } from './administracao.component';
import { LocatarioModule } from './manter-locatario/locatario.module';
import { UsuarioModule } from './manter-usuario/usuario.module';
import { ProprietarioModule } from './manter-propietario/proprietario.module';

@NgModule({
    imports: [
        LocatarioModule,
        ProprietarioModule,
        UsuarioModule
    ],
    exports: [],
    declarations: [
        AdministracaoComponent
    ],
    providers: [],
})
export class AdministracaoModule { }
