import { NgModule } from '@angular/core';

import { LocatarioComponent } from './locatario.component';
import { ListarLocatarioComponent } from './listar-locatario/listar-locatario.component';
import { LocatarioService } from './locatario.service';
import { ModalCadastrarLocatarioComponent } from './modal/cadastrar/modal-cadastrar-locatario.component';
import { DiretivaModule } from 'src/app/_diretivas/diretiva.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        DiretivaModule,
        FormsModule,
        CommonModule,
    ],
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
