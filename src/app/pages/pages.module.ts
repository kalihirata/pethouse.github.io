import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ComoajudarComponent } from './como-ajudar/comoajudar.component';
import { FormularioComponent } from './formulario/formulario.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutComponent } from './quem-somos/about.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomepageComponent,
    GaleriaComponent,
    FormularioComponent,
    AboutComponent,
    ComoajudarComponent,
  ],
  imports: [BrowserModule, SharedModule, ReactiveFormsModule],
  providers: [],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
})
export class PagesModule {}
