import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { EgresosService } from '@core/services/egresos.service';
import { IngresosService } from '@core/services/ingresos.service';

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

  #egresosService = inject(EgresosService);
  #ingresoService = inject(IngresosService);

  agregarTransaccion(): void
  {
    if (this.formBudget.invalid)
    {
      alert('Formulario no válido');
      return;
    }

    if (this.formBudget.value.tipo === 'ingreso')
    {
      this.#ingresoService.ingresos.set([
        ...this.#ingresoService.ingresos(),
        this.formBudget.value,
      ]);
    }
    else
    {
      this.#egresosService.egresos.set([
        ...this.#egresosService.egresos(),
        this.formBudget.value,
      ]);
    }
  }
}
