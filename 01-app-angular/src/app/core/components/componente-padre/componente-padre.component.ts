import {
  ChangeDetectionStrategy,
  Component,
  inject,
  viewChild,
} from '@angular/core';
import { TitleService } from '@shared/services/title.service';

import { ComponenteHijoComponent } from './componente-hijo/componente-hijo.component';

@Component({
  selector: 'app-componente-padre',
  imports: [ComponenteHijoComponent],
  templateUrl: './componente-padre.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComponentePadreComponent
{
  _ = inject(TitleService).title.set(
    'Herencia Componentes - Input / Output / ViewChild'
  );

  componenteHijo = viewChild(ComponenteHijoComponent);

  // mensajePadre = 'Mensaje desde el componente padre';

  // mensaje = signal<string>('');

  cambiarMensajeHijo()
  {
    this.componenteHijo()?.cambiarMensaje(
      'Mensaje cambiado desde el Padre con ViewChild'
    );
  }

  // recibirNotificacion(mensaje: string): void
  // {
  //   this.mensaje.set(mensaje);
  // }
}
