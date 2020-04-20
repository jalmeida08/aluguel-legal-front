import { NgModule } from '@angular/core';

import { LocatarioComponent } from './locatario.component';
import { ListarLocatarioComponent } from './listar-locatario/listar-locatario.component';
import { LocatarioService } from './locatario-service';

@NgModule({
    imports: [],
    exports: [
        LocatarioComponent,
        ListarLocatarioComponent
    ],
    declarations: [
        LocatarioComponent,
        ListarLocatarioComponent
    ],
    providers: [LocatarioService],
})
export class LocatarioModule { }
