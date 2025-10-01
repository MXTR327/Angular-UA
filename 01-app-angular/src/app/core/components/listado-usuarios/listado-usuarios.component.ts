import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { User } from '@core/interfaces/user.interface';
import { TitleService } from '@shared/services/title.service';
import { UsuariosService } from '@shared/services/usuarios.service';

@Component({
  selector: 'app-listado-usuarios',
  imports: [],
  templateUrl: './listado-usuarios.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListadoUsuariosComponent
{
  _ = inject(TitleService).title.set('Servicio de Usuarios desde API');

  #usuariosService = inject(UsuariosService);

  usersResource = rxResource<User[], void>({
    params: () => ({}),
    stream: () => this.#usuariosService.obtenerDatos(),
  });
}
