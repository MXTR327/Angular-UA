/* eslint-disable perfectionist/sort-objects */
import { Routes } from '@angular/router';
import { FormularioProductoComponent } from '@core/components/formulario-producto/formulario-producto.component';
import { ListadoProductosComponent } from '@core/components/listado-productos/listado-productos.component';

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
    path: 'editar/:id',
    component: FormularioProductoComponent,
  },
];
