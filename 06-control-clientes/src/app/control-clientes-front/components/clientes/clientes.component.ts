import { CurrencyPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { ClienteInterface } from '@control-clientes/interfaces/cliente.interface';

import { ClientesService } from '../../services/clientes.service';

@Component({
  selector: 'app-clientes',
  imports: [CurrencyPipe, RouterLink],
  templateUrl: './clientes.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClientesComponent
{
  clientes = signal<ClienteInterface[] | null>(null);
  #clientesService = inject(ClientesService);

  constructor()
  {
    this.#clientesService.clientes.subscribe(clients =>
      this.clientes.set(clients)
    );
  }

  getSaldoTotal(): number
  {
    return (
      this.clientes()?.reduce(
        (total, cliente) => total + (cliente.saldo ?? 0),
        0
      ) ?? 0
    );
  }
}
