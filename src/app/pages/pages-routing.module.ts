import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComoajudarComponent } from './como-ajudar/comoajudar.component';
import { FormularioComponent } from './formulario/formulario.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutComponent } from './quem-somos/about.component';

const pagesRoutes: Routes = [
  { path: '', redirectTo: '/homepage', pathMatch: 'full' },
  { path: 'homepage', component: HomepageComponent },
  { path: 'galeria', component: GaleriaComponent },
  { path: 'quem-somos', component: AboutComponent },
  { path: 'formulario', component: FormularioComponent },
  { path: 'como-ajudar', component: ComoajudarComponent },
];

@NgModule({
  imports: [RouterModule.forChild(pagesRoutes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
