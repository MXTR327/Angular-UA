import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-mostrar-mensaje',
  imports: [],
  templateUrl: './mostrar-mensaje.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MostrarMensajeComponent
{
  mensaje = signal('');

  resetearMensaje()
  {
    this.mensaje.set('');
  }
  mostrarMensaje()
  {
    this.mensaje.set('Hola, has hecho click en el boton!');
  }
}
