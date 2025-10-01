import { CurrencyPipe, PercentPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { BudgetService } from '@core/services/budget.service';

@Component({
  selector: 'app-budget-outs',
  imports: [CurrencyPipe, PercentPipe],
  templateUrl: './budget-outs.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BudgetOutsComponent
{
  #budgetService = inject(BudgetService);

  egresos = this.#budgetService.egresos;

  eliminarEgreso = (descripcion: string) =>
    this.#budgetService.eliminarEgreso(descripcion);
}
