import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { TitleService } from '@shared/services/title.service';

@Component({
  selector: 'app-agregar-tarea',
  imports: [],
  templateUrl: './agregar-tarea.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AgregarTareaComponent
{
  _ = inject(TitleService).title.set('Local Reference en Angular');

  tarea = signal<string>('');

  agregarTarea(nuevaTarea: string): void
  {
    this.tarea.set(nuevaTarea);
  }
}
