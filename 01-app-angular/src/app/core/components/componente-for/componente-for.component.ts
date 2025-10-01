import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { TitleService } from '@shared/services/title.service';

@Component({
  selector: 'app-componente-for',
  imports: [],
  templateUrl: './componente-for.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComponenteForComponent
{
  _ = inject(TitleService).title.set('Directiva @for en Angular');

  tareas = signal<string[]>([
    'Aprender Angular',
    'Construir una aplicación',
    'Desplegar la aplicación',
    'Compartir con la comunidad',
  ]);

  agregarTarea(nuevaTarea: string): void
  {
    if (nuevaTarea)
    {
      this.tareas.set([...this.tareas(), nuevaTarea]);
    }
  }
}
