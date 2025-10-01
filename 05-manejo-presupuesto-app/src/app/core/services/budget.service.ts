import { Injectable, signal } from '@angular/core';
import { ITransaccion } from '@core/interfaces/transaccion.interface';

@Injectable({
  providedIn: 'root',
})
export class BudgetService
{
  egresos = signal<ITransaccion[]>([]);

  ingresos = signal<ITransaccion[]>([]);

  agregarEgreso = (egreso: ITransaccion) =>
  {
    this.egresos.set([...this.egresos(), egreso]);
    this.recalcularPorcentajesEgresos();
  };

  agregarIngreso = (ingreso: ITransaccion) =>
  {
    this.ingresos.set([...this.ingresos(), ingreso]);
    this.recalcularPorcentajesEgresos();
  };

  eliminarEgreso = (descripcion: string) =>
  {
    this.egresos.set(
      this.egresos().filter(egres => egres.descripcion !== descripcion)
    );
    this.recalcularPorcentajesEgresos();
  };

  eliminarIngreso = (descripcion: string) =>
  {
    this.ingresos.set(
      this.ingresos().filter(ingres => ingres.descripcion !== descripcion)
    );
    this.recalcularPorcentajesEgresos();
  };

  porcentajeEgreso = () =>
    this.egresos().reduce(
      (total, egreso) => total + (egreso.porcentaje ?? 0),
      0
    );

  presupuestoEgresos = () =>
    this.egresos().reduce((total, egreso) => total + egreso.monto, 0);

  presupuestoIngresos = () =>
    this.ingresos().reduce((total, ingreso) => total + ingreso.monto, 0);

  presupuestoTotal = () =>
    this.presupuestoIngresos() - this.presupuestoEgresos();

  private recalcularPorcentajesEgresos = () =>
  {
    const totalIngresos = this.presupuestoIngresos();

    this.egresos.set(
      this.egresos().map(egreso => ({
        ...egreso,
        porcentaje: totalIngresos > 0 ? egreso.monto / totalIngresos : 0,
      }))
    );
  };
}
