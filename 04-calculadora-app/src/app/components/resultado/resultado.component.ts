import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-resultado',
  imports: [],
  templateUrl: './resultado.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResultadoComponent
{
  resultado = input.required<number>();
}
