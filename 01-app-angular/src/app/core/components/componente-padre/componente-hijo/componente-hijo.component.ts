import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-componente-hijo',
  imports: [],
  templateUrl: './componente-hijo.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComponenteHijoComponent
{
  // mensaje = input.required<string>();

  // notificarPadre = output<string>();

  mensajeVC = signal<string>('Mensaje desde el Hijo');
  cambiarMensaje(nuevoMensaje: string): void
  {
    this.mensajeVC.set(nuevoMensaje);
  }

  // enviarMensaje(): void
  // {
  //   this.notificarPadre.emit('Mensaje desde el componente hijo');
  // }
}
