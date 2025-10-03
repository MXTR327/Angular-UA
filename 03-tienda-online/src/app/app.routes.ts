/* eslint-disable perfectionist/sort-objects */
import { Routes } from '@angular/router';
import { ErrorComponent } from '@core/components/error/error.component';
import { FormularioProductoComponent } from '@core/components/formulario-producto/formulario-producto.component';
import { ListadoProductosComponent } from '@core/components/listado-productos/listado-productos.component';
import { LoginComponent } from '@core/components/login/login.component';

export const routes: Routes = [
  {
    path: '',
    component: ListadoProductosComponent,
  },
  {
    path: 'listado',
    component: ListadoProductosComponent,
  },
  {
    path: 'agregar',
    component: FormularioProductoComponent,
  },
  {
    path: 'editar/:llave',
    component: FormularioProductoComponent,
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: '**',
    component: ErrorComponent,
  },
];
