import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  #route = inject(ActivatedRoute);

  mensaje = this.#route.snapshot.queryParamMap.get('mensaje') ?? '';

  mostrarMensaje()
  {
    this.mensaje = 'Hola, has hecho click en el boton!';
  }
  resetearMensaje()
  {
    this.mensaje = this.#route.snapshot.queryParamMap.get('mensaje') ?? '';
  }
}
