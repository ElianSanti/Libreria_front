import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibreriaRoutingModule } from './libreria-routing.module';
import { InicioComponent } from './pages/inicio/inicio.component';
import { SubirLibroComponent } from './pages/subir-libro/subir-libro.component';
import { ModificarLibroComponent } from './pages/modificar-libro/modificar-libro.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserComponent } from './components/browser/browser.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    InicioComponent,
    SubirLibroComponent,
    ModificarLibroComponent,
    NavbarComponent,
    BrowserComponent,
    
  ],
  imports: [
    CommonModule,
    LibreriaRoutingModule,
    FormsModule
  ]
})
export class LibreriaModule { }
