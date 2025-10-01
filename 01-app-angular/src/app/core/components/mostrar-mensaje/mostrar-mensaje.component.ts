import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { TitleService } from '@shared/services/title.service';

@Component({
  selector: 'app-mostrar-mensaje',
  imports: [],
  templateUrl: './mostrar-mensaje.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MostrarMensajeComponent
{
  _ = inject(TitleService).title.set('Mostrar Mensaje');

  mensaje = signal('');

  mostrarMensaje()
  {
    this.mensaje.set('Hola, has hecho click en el boton!');
  }
  resetearMensaje()
  {
    this.mensaje.set('');
  }
}
