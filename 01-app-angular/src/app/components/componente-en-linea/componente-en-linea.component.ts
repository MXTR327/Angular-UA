import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-componente-en-linea',
  imports: [],
  template: `
    <h1>{{ tituloComponenteInLine }}</h1>
    <p>Fuente mas grande</p>
  `,
  styles: `
    h1 {
      color: blue;
    }
    p {
      font-size: 20px;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComponenteEnLineaComponent
{
  tituloComponenteInLine = 'Componente en Línea';
}
