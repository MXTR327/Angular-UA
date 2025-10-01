import {
  ChangeDetectionStrategy,
  Component,
  output,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-form-calculadora',
  imports: [],
  templateUrl: './form-calculadora.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormCalculadoraComponent
{
  a = signal<number>(0);
  b = signal<number>(0);

  resultado = output<number>();

  sumar()
  {
    if (this.a() && this.b())
    {
      this.resultado.emit(this.a() + this.b());
    }
    else
    {
      alert('Ingrese ambos numeros');
    }
  }
}
