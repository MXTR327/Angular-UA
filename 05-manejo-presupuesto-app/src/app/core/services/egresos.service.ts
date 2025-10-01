import { Injectable, signal } from '@angular/core';
import { ITransaccion } from '@core/interfaces/transaccion.interface';

@Injectable({
  providedIn: 'root',
})
export class EgresosService
{
  egresos = signal<ITransaccion[]>([
    {
      descripcion: 'Renta',
      monto: 900,
    },
    {
      descripcion: 'Ropa',
      monto: 200,
    },
  ] );

  eliminar(egreso: ITransaccion)
  {
    this.egresos.update(outs => outs.filter(item => item !== egreso));
  }
}
