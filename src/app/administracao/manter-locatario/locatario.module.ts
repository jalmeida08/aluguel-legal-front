import { NgModule } from '@angular/core';

import { LocatarioComponent } from './locatario.component';
import { ListarLocatarioComponent } from './listar-locatario/listar-locatario.component';
import { LocatarioService } from './locatario-service';
import { ModalCadastrarLocatarioComponent } from './modal/cadastrar/modal-cadastrar-locatario.component';
import { DiretivaModule } from 'src/app/_diretivas/diretiva.module';

@NgModule({
    imports: [DiretivaModule],
    exports: [
        LocatarioComponent,
        ListarLocatarioComponent,
        ModalCadastrarLocatarioComponent
    ],
    declarations: [
        LocatarioComponent,
        ListarLocatarioComponent,
        ModalCadastrarLocatarioComponent
    ],
    providers: [LocatarioService],
})
export class LocatarioModule { }
