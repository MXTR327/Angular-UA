import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from '@core/services/products.service';

import { ProductoComponent } from '../producto/producto.component';

@Component({
  selector: 'app-listado-productos',
  imports: [ProductoComponent, FormsModule],
  templateUrl: './listado-productos.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListadoProductosComponent
{
  #productsService = inject(ProductsService);
  productos = this.#productsService.productos;

  #router = inject(Router);

  agregarProducto()
  {
    this.#router.navigate(['agregar']);
  }
}
