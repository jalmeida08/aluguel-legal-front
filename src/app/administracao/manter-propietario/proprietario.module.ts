import { NgModule } from '@angular/core';

import { ProprietarioComponent } from './proprietario.component';
import { CadastrarProprietarioComponent } from './cadastrar/cadastrar-proprietario.component';
import { ProprietarioService } from './proprietario.service';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        FormsModule,
    ],
    exports: [
        ProprietarioComponent,
        CadastrarProprietarioComponent
    ],
    declarations: [
        ProprietarioComponent,
        CadastrarProprietarioComponent
    ],
    providers: [
        ProprietarioService
    ],
})
export class ProprietarioModule { }
