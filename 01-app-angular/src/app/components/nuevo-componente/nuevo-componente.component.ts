import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-nuevo-componente',
  imports: [],
  templateUrl: './nuevo-componente.component.html',
  styleUrl: './nuevo-componente.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NuevoComponenteComponent
{
  tituloNuevoComponente = 'Nuevo Componente';
}
