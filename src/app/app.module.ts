import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AmbientalComponent } from './pages/ambiental/ambiental.component';
import { UploadFileComponent } from './pages/upload-file/upload-file.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactosComponent } from './pages/contactos/contactos.component';
import { QuienesComponent } from './pages/quienes/quienes.component';
import { PagesComponent } from './pages/pages.component';
import { HeaderComponent } from './shared/header/header.component';
import { TipoCalculoComponent } from './pages/tipo-calculo/tipo-calculo.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NopagefoundComponent,

    FooterComponent,
    AmbientalComponent,
    UploadFileComponent,
    HomeComponent,
    ContactosComponent,
    QuienesComponent,
    PagesComponent,

    HeaderComponent,
     TipoCalculoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
