import { NgModule } from '@angular/core';

import { ImovelComponent } from './imovel.component';
import { ModalCadastroImovelComponent } from './modal/modal-cadastrar-imovel.component';
import { ImovelService } from './imovel.service';
import { DiretivaModule } from 'src/app/_diretivas/diretiva.module';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    imports: [
        DiretivaModule,
        FormsModule,
        BrowserModule,
        
    ],
    exports: [
        ImovelComponent,
        ModalCadastroImovelComponent
    ],
    declarations: [
        ImovelComponent,
        ModalCadastroImovelComponent
    ],
    providers: [ImovelService],
    // schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class ImovelModule { }
