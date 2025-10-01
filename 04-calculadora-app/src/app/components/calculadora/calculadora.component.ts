import { FormCalculadoraComponent } from '../form-calculadora/form-calculadora.component';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ResultadoComponent } from "../resultado/resultado.component";

@Component({
  selector: 'app-calculadora',
  imports: [FormCalculadoraComponent, ResultadoComponent],
  templateUrl: './calculadora.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalculadoraComponent
{
  resultado = signal<number>(0);

  manejarResultado = (valor: number) => this.resultado.set(valor);
}
