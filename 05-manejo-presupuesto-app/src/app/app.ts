import { Component, signal } from '@angular/core';
import { BudgetInsComponent } from '@core/components/budget-ins/budget-ins.component';
import { BudgetOutsComponent } from '@core/components/budget-outs/budget-outs.component';
import { BudgetSummaryComponent } from '@core/components/budget-summary/budget-summary.component';
import { FormBudgetComponent } from '@core/components/form-budget/form-budget.component';

@Component({
  selector: 'app-root',
  imports: [
    BudgetSummaryComponent,
    FormBudgetComponent,
    BudgetInsComponent,
    BudgetOutsComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App
{
  protected readonly title = signal('manejo-presupuestos-app');
}
