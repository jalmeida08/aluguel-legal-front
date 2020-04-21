import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { routing } from './app.routes';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { HttpClientModule } from '@angular/common/http';
import { HomeModule } from './home/home.module';
import { Interceptor } from './_config/Interceptor.interceptor';
import { DataService } from './services/data.service';
import { MenuComponent } from './menu/menu.component';
import { AdministracaoModule } from './administracao/administracao.module';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Interceptor,
    HttpClientModule,
    routing,
    LoginModule,
    HomeModule,
    AdministracaoModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
