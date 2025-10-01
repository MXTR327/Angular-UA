import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TitleService } from '@shared/services/title.service';

@Component({
  selector: 'app-nuevo-componente',
  imports: [],
  templateUrl: './nuevo-componente.component.html',
  styleUrl: './nuevo-componente.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NuevoComponenteComponent
{
  _ = inject(TitleService).title.set('Componentes');

  tituloNuevoComponente = 'Nuevo Componente';
}
