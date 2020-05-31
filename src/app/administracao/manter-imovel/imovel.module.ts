import { NgModule } from '@angular/core';

import { ImovelComponent } from './imovel.component';
import { ModalCadastroImovelComponent } from './modal/cadastrar-imovel/modal-cadastrar-imovel.component';
import { ImovelService } from './imovel.service';
import { DiretivaModule } from 'src/app/_diretivas/diretiva.module';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DetalheImovelComponent } from './detalhe/detalhe-imovel.component'
import { ModalAdicionarLocatarioComponent } from './modal/adicionar-locatario/modal-adicionar-locatario.component';


@NgModule({
    imports: [
        DiretivaModule,
        FormsModule,
        BrowserModule
    ],
    exports: [
        ImovelComponent,
        ModalCadastroImovelComponent
    ],
    declarations: [
        ImovelComponent,
        ModalCadastroImovelComponent,
        DetalheImovelComponent,
        ModalAdicionarLocatarioComponent,
    ],
    providers: [ImovelService],
    // schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class ImovelModule { }
