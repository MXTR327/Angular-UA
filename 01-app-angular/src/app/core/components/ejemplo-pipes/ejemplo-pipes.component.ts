import { CurrencyPipe, DatePipe, UpperCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TitleService } from '@shared/services/title.service';


@Component({
  selector: 'app-ejemplo-pipes',
  imports: [UpperCasePipe, DatePipe, CurrencyPipe],
  templateUrl: './ejemplo-pipes.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EjemploPipesComponent
{
  _ = inject(TitleService).title.set('Ejemplo de Pipes en Angular');

  empleados = [
    {
      fechaNacimiento: new Date('2000-08-01'),
      nombre: 'Ricado Suarez',
      sueldo: 12000,
    },
    {
      fechaNacimiento: new Date('1988-09-05'),
      nombre: 'Laura Mejia',
      sueldo: 15000,
    },
    {
      fechaNacimiento: new Date('1995-07-12'),
      nombre: 'Gilberto Anaya',
      sueldo: 8000,
    },
  ];
}
