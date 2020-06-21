import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './login.component';
import { routing } from '../../app.routes';
import { LoginService } from './login.service';
import { AlertaModule } from '../../_diretivas/alerta/alerta.module';

@NgModule({
    imports: [
        routing,
        FormsModule,
        AlertaModule,
    ],
    exports: [],
    declarations: [LoginComponent],
    providers: [LoginService],
})
export class LoginModule { }
