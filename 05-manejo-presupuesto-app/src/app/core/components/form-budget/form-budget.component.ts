import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { BudgetService } from '../../services/budget.service';

// type transacionType = 'ingreso' | 'egreso';

@Component({
  selector: 'app-form-budget',
  imports: [ReactiveFormsModule],
  templateUrl: './form-budget.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormBudgetComponent
{
  #fb = inject(FormBuilder);
  formBudget: FormGroup = this.#fb.group({
    descripcion: ['', [Validators.required, Validators.minLength(3)]],
    monto: ['', [Validators.required, Validators.min(0.01)]],
    tipo: ['ingreso', [Validators.required]],
  });

  #budgetService = inject(BudgetService);

  agregarTransaccion(): void
  {
    if (this.formBudget.invalid)
    {
      alert('Formulario no válido');
      return;
    }

    if (this.formBudget.value.tipo === 'ingreso')
    {
      this.#budgetService.agregarIngreso(this.formBudget.value);
    }
    else
    {
      this.#budgetService.agregarEgreso(this.formBudget.value);
    }
  }
}
