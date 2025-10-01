import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
} from '@angular/core';
import { Producto } from '@core/interfaces/producto.interface';
import { ProductsService } from '@core/services/products.service';

@Component({
  selector: 'app-producto',
  imports: [],
  templateUrl: './producto.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductoComponent
{
  public producto = input.required<Producto>();

  #productsService = inject(ProductsService);

  emitirDetalleProducto()
  {
    this.#productsService.detalleProducto.set(this.producto());
  }
}
