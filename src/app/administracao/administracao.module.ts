import { NgModule } from '@angular/core';

import { AdministracaoComponent } from './administracao.component';
import { LocatarioModule } from './manter-locatario/locatario.module';
import { UsuarioModule } from './manter-usuario/usuario.module';
import { ProprietarioModule } from './manter-propietario/proprietario.module';
import { DiretivaModule } from '../_diretivas/diretiva.module';
import { MenuAdministracaoComponent } from '../_diretivas/menu-administracao/menu-administracao.component';
import { ImovelModule } from './manter-imovel/imovel.module';

@NgModule({
    imports: [
        LocatarioModule,
        ProprietarioModule,
        ImovelModule,
        UsuarioModule,
        DiretivaModule,
    ],
    exports: [],
    declarations: [
        AdministracaoComponent,
    ],
    providers: [],
})
export class AdministracaoModule { }
