import { ChangeDetectionStrategy, Component } from '@angular/core';

import { ClientesComponent } from '../clientes/clientes.component';

@Component({
  selector: 'app-tablero',
  imports: [ClientesComponent],
  templateUrl: './tablero.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableroComponent
{}
