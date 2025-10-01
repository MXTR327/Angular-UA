import { Component, inject, signal } from '@angular/core';
import { BudgetInsComponent } from '@core/components/budget-ins/budget-ins.component';
import { BudgetOutsComponent } from '@core/components/budget-outs/budget-outs.component';
import { BudgetSummaryComponent } from '@core/components/budget-summary/budget-summary.component';
import { FormBudgetComponent } from '@core/components/form-budget/form-budget.component';
import { EgresosService } from '@core/services/egresos.service';
import { IngresosService } from '@core/services/ingresos.service';

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

  #egresosService = inject(EgresosService);
  #ingresosService = inject(IngresosService);

  getEgresoTotal = (): number =>
    this.#egresosService
      .egresos()
      .reduce((total, egreso) => total + egreso.monto, 0);

  getIngresoTotal = (): number =>
    this.#ingresosService
      .ingresos()
      .reduce((total, ingreso) => total + ingreso.monto, 0);

  getPorcetajeTotal = (): number =>
    this.getEgresoTotal() / this.getIngresoTotal();

  getPresupuestoTotal = (): number =>
    this.getIngresoTotal() - this.getEgresoTotal();
}
