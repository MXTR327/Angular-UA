import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { TitleService } from '@shared/services/title.service';

@Component({
  selector: 'app-componente-if',
  imports: [],
  templateUrl: './componente-if.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComponenteIfComponent
{
  _ = inject(TitleService).title.set('Componente If');

  isAutenticado = signal<boolean>(false);

  alternarAutenticacion(): void
  {
    this.isAutenticado.set(!this.isAutenticado());
  }
}
