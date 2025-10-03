import { CurrencyPipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
} from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from '@core/interfaces/producto.interface';

@Component({
  selector: 'app-producto',
  imports: [CurrencyPipe],
  templateUrl: './producto.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductoComponent
{
  llave = input.required<string>();
  producto = input.required<Producto>();

  #router = inject(Router);
  editarProducto()
  {
    this.#router.navigate(['/editar', this.llave()]);
  }
}
