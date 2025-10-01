import { CurrencyPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { BudgetService } from '../../services/budget.service';

@Component({
  selector: 'app-budget-ins',
  imports: [CurrencyPipe],
  templateUrl: './budget-ins.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BudgetInsComponent
{
  #budgetService = inject(BudgetService);
  ingresos = this.#budgetService.ingresos;

  eliminarIngreso = (descripcion: string) =>
    this.#budgetService.eliminarIngreso(descripcion);
}
