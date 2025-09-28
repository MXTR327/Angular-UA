import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-replicador',
  imports: [],
  templateUrl: './replicador.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReplicadorComponent
{
  texto = signal<string>('');

  actualizarTexto(texto: string)
  {
    this.texto.set(texto);
  }
}
