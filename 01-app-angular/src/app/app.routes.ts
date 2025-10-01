/* eslint-disable perfectionist/sort-objects */
import { Routes } from '@angular/router';
import { ComponenteHijoComponent } from '@core/components/componente-padre/componente-hijo/componente-hijo.component';
import { ComponentePadreComponent } from '@core/components/componente-padre/componente-padre.component';
import { ListadoUsuariosComponent } from '@core/components/listado-usuarios/listado-usuarios.component';
import { MostrarMensajeComponent } from '@core/components/mostrar-mensaje/mostrar-mensaje.component';

export const routes: Routes = [
  {
    path: '',
    component: ListadoUsuariosComponent,
  },
  {
    path: 'mostrar-mensaje',
    component: MostrarMensajeComponent,
  },
  {
    path: 'configuracion',
    children: [
      {
        path: 'padre',
        component: ComponentePadreComponent,
      },
      {
        path: 'hijo',
        component: ComponenteHijoComponent,
      },
    ],
  },
];
