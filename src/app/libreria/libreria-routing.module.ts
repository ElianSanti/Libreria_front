import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { SubirLibroComponent } from './pages/subir-libro/subir-libro.component';
import { ModificarLibroComponent } from './pages/modificar-libro/modificar-libro.component';

const routes: Routes = [
  {
    path: '',
    children:[
      {
        path:'inicio',
        component: InicioComponent
      },
      {
        path: 'subir-libro',
        component: SubirLibroComponent
      },
      {
        path: 'modificar/:id',
        component: ModificarLibroComponent
      },
      {
        path: '**',
        redirectTo: 'inicio'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibreriaRoutingModule { }
