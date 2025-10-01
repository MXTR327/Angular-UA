import { Injectable, signal } from '@angular/core';
import { ITransaccion } from '@core/interfaces/transaccion.interface';

@Injectable({
  providedIn: 'root',
})
export class IngresosService
{
  ingresos = signal<ITransaccion[]>([
    {
      descripcion: 'Salario',
      monto: 4000,
    },
    {
      descripcion: 'Venta coche',
      monto: 500,
    },
  ]);

  eliminar(ingreso: ITransaccion)
  {
    this.ingresos.update(ins => ins.filter(item => item !== ingreso));
  }
}
