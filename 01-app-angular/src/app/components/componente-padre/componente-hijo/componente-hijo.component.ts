import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-componente-hijo',
  imports: [],
  templateUrl: './componente-hijo.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComponenteHijoComponent
{
  #titulo = 'Titulo del componente hijo';

  // Getter de ts
  get mostrarTitulo()
  {
    return this.#titulo;
  }

  getTitulo()
  {
    return this.#titulo;
  }
}
