import {
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductsService } from '@core/services/products.service';

import { FormularioProductoComponent } from '../formulario-producto/formulario-producto.component';
import { ProductoComponent } from '../producto/producto.component';

@Component({
  selector: 'app-listado-productos',
  imports: [ProductoComponent, FormsModule, FormularioProductoComponent],
  templateUrl: './listado-productos.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListadoProductosComponent
{
  #productsService = inject(ProductsService);
  productos = this.#productsService.productos;

  constructor()
  {
    effect(() =>
    {
      const detalleProd = this.#productsService.detalleProducto();
      if (detalleProd === undefined) return;
      alert(
        `Producto: ${detalleProd.descripcion}, Precio: $${detalleProd.precio}`
      );
    });
  }
}
