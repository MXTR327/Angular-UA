import { CurrencyPipe, PercentPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-budget-summary',
  imports: [CurrencyPipe, PercentPipe],
  templateUrl: './budget-summary.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BudgetSummaryComponent
{
  egresoTotal = input.required<number>();
  ingresoTotal = input.required<number>();
  porcentajeTotal = input.required<number>();
  presupuestoTotal = input.required<number>();
}
