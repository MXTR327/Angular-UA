import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TitleService } from '@shared/services/title.service';

@Component({
  selector: 'app-interpolacion',
  imports: [],
  templateUrl: './interpolacion.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InterpolacionComponent
{
  _ = inject(TitleService).title.set('Interpolacion de componentes');

  public titulo = 'Universidad Angular';
  public usuario = {
    edad: 35,
    nombre: 'Max RQ',
  };

  public saludar()
  {
    return `Hola, ${this.usuario.nombre}`;
  }
}
