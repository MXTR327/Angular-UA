import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MensajeService
{
  #mensaje = signal<string>('Mensaje desde el servicio');

  obtenerMensaje(): string
  {
    return this.#mensaje();
  }
}
