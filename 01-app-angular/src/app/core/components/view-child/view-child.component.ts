import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  inject,
  viewChild,
} from '@angular/core';
import { TitleService } from '@shared/services/title.service';

@Component({
  selector: 'app-view-child',
  imports: [],
  templateUrl: './view-child.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewChildComponent
{
  _ = inject(TitleService).title.set('Signal ViewChild en Angular');

  inputElemento = viewChild<ElementRef>('referenciaInput');

  cambiarTexto()
  {
    this.inputElemento()!.nativeElement.value = 'Hola Mundo';
  }
}
