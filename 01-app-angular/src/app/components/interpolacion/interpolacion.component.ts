import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-interpolacion',
  imports: [],
  templateUrl: './interpolacion.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InterpolacionComponent
{
  public titulo = 'Universidad Angular';
  public usuario = {
    nombre: 'Max RQ',
    edad: 35,
  };

  public saludar()
  {
    return `Hola, ${this.usuario.nombre}`;
  }
}
