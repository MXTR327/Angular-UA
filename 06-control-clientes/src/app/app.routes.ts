/* eslint-disable perfectionist/sort-objects */
import { Routes } from '@angular/router';
import { EditarClienteComponent } from '@control-clientes/components/editar-cliente/editar-cliente.component';
import { LoginComponent } from '@control-clientes/components/login/login.component';
import { NoEncontradoComponent } from '@control-clientes/components/no-encontrado/no-encontrado.component';
import { TableroComponent } from '@control-clientes/components/tablero/tablero.component';
import { loginGuard } from '@control-clientes/guards/login.guard';

export const routes: Routes = [
  {
    path: '',
    component: TableroComponent,
    canActivate: [loginGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'cliente/editar/:id',
    component: EditarClienteComponent,
    canActivate: [loginGuard],
  },
  {
    path: '**',
    component: NoEncontradoComponent,
  },
];
