import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { TitleService } from '@shared/services/title.service';

@Component({
  selector: 'app-replicador',
  imports: [],
  templateUrl: './replicador.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReplicadorComponent
{
  _ = inject( TitleService ).title.set( 'Replicador' );

  texto = signal<string>('');

  actualizarTexto(texto: string)
  {
    this.texto.set(texto);
  }
}
