/* eslint-disable perfectionist/sort-objects */
import { Routes } from '@angular/router';
import { ErrorComponent } from '@core/components/error/error.component';
import { FormularioProductoComponent } from '@core/components/formulario-producto/formulario-producto.component';
import { ListadoProductosComponent } from '@core/components/listado-productos/listado-productos.component';
import { LoginComponent } from '@core/components/login/login.component';
import { loginGuard } from '@core/guards/login.guard';

export const routes: Routes = [
  {
    path: '',
    component: ListadoProductosComponent,
    canActivate: [loginGuard],
  },
  {
    path: 'listado',
    component: ListadoProductosComponent,
    canMatch: [loginGuard],
  },
  {
    path: 'agregar',
    component: FormularioProductoComponent,
    canMatch: [loginGuard],
  },
  {
    path: 'editar/:llave',
    component: FormularioProductoComponent,
    canMatch: [loginGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '**',
    component: ErrorComponent,
  },
];
