import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { UploadFileComponent } from './pages/upload-file/upload-file.component';
import { EconomicoComponent } from './pages/economico/economico.component';
import { SocialComponent } from './pages/social/social.component';
import { AmbientalComponent } from './pages/ambiental/ambiental.component';
import { InstitucionalComponent } from './pages/institucional/institucional.component';
import { HomeComponent } from './pages/home/home.component';
import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';
import { ContactosComponent } from './pages/contactos/contactos.component';
import { QuienesComponent } from './pages/quienes/quienes.component';
import { PagesComponent } from './pages/pages.component';
import { GraficaComponent } from './pages/grafica/grafica.component';

const routes: Routes = [

  {
    path: '',
    component: PagesComponent,
    children: [

      { path: 'upload', component: UploadFileComponent },
      { path: 'economico', component: EconomicoComponent },
      { path: 'social', component: SocialComponent },
      { path: 'ambiental', component: AmbientalComponent },
      { path: 'institucional', component: InstitucionalComponent },
      { path: 'contactos', component: ContactosComponent },
      { path: 'quienes', component: QuienesComponent },
      { path: 'grafica', component: GraficaComponent },
      { path: 'home', component: HomeComponent },
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: '**', component: NopagefoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
