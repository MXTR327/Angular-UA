import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Producto } from '@core/interfaces/producto.interface';
import { ProductsService } from '@core/services/products.service';

@Component({
  selector: 'app-formulario-producto',
  imports: [FormsModule],
  templateUrl: './formulario-producto.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormularioProductoComponent
{
  descripcionIn = signal<string>('');
  precioIn = signal<null | number>(null);

  #productsService = inject(ProductsService);

  agregarProducto()
  {
    if (this.descripcionIn().trim() === '' || (this.precioIn() ?? 0) <= 0)
    {
      alert('Por favor, ingrese una descripcion y un precio valido');
      return;
    }

    const producto: Producto = {
      descripcion: this.descripcionIn(),
      precio: this.precioIn() ?? 0,
    };

    this.#productsService.agregarProducto(producto);

    this.descripcionIn.set('');
    this.precioIn.set(null);
  }
}
