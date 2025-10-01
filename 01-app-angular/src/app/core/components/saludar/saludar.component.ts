import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TitleService } from '@shared/services/title.service';

@Component({
  selector: 'app-saludar',
  imports: [],
  templateUrl: './saludar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SaludarComponent
{
  _ = inject(TitleService).title.set('Saludar');

  saludo = 'Saludo inicial';
}
