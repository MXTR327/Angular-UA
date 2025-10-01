import { CurrencyPipe, PercentPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { BudgetService } from '@core/services/budget.service';

@Component({
  selector: 'app-budget-summary',
  imports: [CurrencyPipe, PercentPipe],
  templateUrl: './budget-summary.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BudgetSummaryComponent
{
  #budgetService = inject(BudgetService);
  porcentajeEgreso = this.#budgetService.porcentajeEgreso;
  presupuestoEgresos = this.#budgetService.presupuestoEgresos;
  presupuestoIngresos = this.#budgetService.presupuestoIngresos;
  presupuestoTotal = this.#budgetService.presupuestoTotal;
}
