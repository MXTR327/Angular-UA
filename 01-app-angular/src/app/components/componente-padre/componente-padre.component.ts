import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ComponenteHijoComponent } from "./componente-hijo/componente-hijo.component";

@Component({
  selector: 'app-componente-padre',
  imports: [ComponenteHijoComponent],
  templateUrl: './componente-padre.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComponentePadreComponent { }
