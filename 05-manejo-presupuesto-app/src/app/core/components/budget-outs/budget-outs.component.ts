import { CurrencyPipe, PercentPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
} from '@angular/core';
import { ITransaccion } from '@core/interfaces/transaccion.interface';
import { EgresosService } from '@core/services/egresos.service';

@Component({
  selector: 'app-budget-outs',
  imports: [CurrencyPipe, PercentPipe],
  templateUrl: './budget-outs.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BudgetOutsComponent
{
  #budgetService = inject(EgresosService);
  egresos = this.#budgetService.egresos;

  ingresoTotal = input.required<number>();

  calcularPorcentaje = (egreso: ITransaccion) =>
  {
    return egreso.monto / this.ingresoTotal();
  };

  eliminarEgreso = (egreso: ITransaccion) =>
    this.#budgetService.eliminar(egreso);
}
