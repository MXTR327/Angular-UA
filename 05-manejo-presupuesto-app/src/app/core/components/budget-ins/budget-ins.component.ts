import { CurrencyPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ITransaccion } from '@core/interfaces/transaccion.interface';
import { IngresosService } from '@core/services/ingresos.service';

@Component({
  selector: 'app-budget-ins',
  imports: [CurrencyPipe],
  templateUrl: './budget-ins.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BudgetInsComponent
{
  #ingresosService = inject(IngresosService);
  ingresos = this.#ingresosService.ingresos;

  eliminarIngreso = (ingreso: ITransaccion) =>
    this.#ingresosService.eliminar(ingreso);
}
