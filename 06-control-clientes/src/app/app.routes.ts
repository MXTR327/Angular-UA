/* eslint-disable perfectionist/sort-objects */
import { Routes } from '@angular/router';

import { EditarClienteComponent } from './control-clientes-front/components/editar-cliente/editar-cliente.component';
import { LoginComponent } from './control-clientes-front/components/login/login.component';
import { NoEncontradoComponent } from './control-clientes-front/components/no-encontrado/no-encontrado.component';
import { TableroComponent } from './control-clientes-front/components/tablero/tablero.component';

export const routes: Routes = [
  {
    path: '',
    component: TableroComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'cliente/editar/:id',
    component: EditarClienteComponent,
  },
  {
    path: '**',
    component: NoEncontradoComponent,
  },
];
