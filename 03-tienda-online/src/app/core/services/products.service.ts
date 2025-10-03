import { inject, Injectable, signal } from '@angular/core';
import { Producto } from '@core/interfaces/producto.interface';

import { DatosService } from './datos.service';

@Injectable({
  providedIn: 'root',
})
export class ProductsService
{
  public productos = signal<Record<string, Producto>>({});
  #datosService = inject(DatosService);

  constructor()
  {
    this.loadProductos();
  }

  eliminarProducto = (llave: string) =>
  {
    this.#datosService
      .eliminarProducto(llave)
      .subscribe(() => this.loadProductos());
  };

  getProductByLlave(llave: string): Producto | undefined
  {
    return this.productos()[llave];
  }

  // Agregar o Modificar Producto
  guardarProducto(producto: Producto, llave: null | string = null)
  {
    if (!llave)
    {
      this.#datosService
        .agregarProducto(producto)
        .subscribe(() => this.loadProductos());
    }
    else
    {
      this.#datosService
        .modificarProducto(producto, llave)
        .subscribe(() => this.loadProductos());
    }
  }

  loadProductos()
  {
    this.#datosService
      .listarProductos()
      .subscribe((productos: Record<string, Producto>) =>
        this.productos.set(productos)
      );
  }
}
