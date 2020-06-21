import { NgModule } from '@angular/core';
import { ParticiparLocatarioAluguelLegalComponent } from './participar-locatario-aluguel-legal/participar-locatario-aluguel-legal.component';
import { FormsModule } from '@angular/forms';
import { UsuarioService } from '../administracao/manter-usuario/usuario.service';


@NgModule({
    imports: [FormsModule],
    exports: [ParticiparLocatarioAluguelLegalComponent],
    declarations: [ParticiparLocatarioAluguelLegalComponent],
    providers: [UsuarioService],
})
export class AreaPublicaModule { }
