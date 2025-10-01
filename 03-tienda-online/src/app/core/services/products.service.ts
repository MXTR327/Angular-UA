import { Injectable, signal } from '@angular/core';
import { Producto } from '@core/interfaces/producto.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductsService
{
  public productos = signal<Producto[]>([]);
  // Variable para el id
  #idSiguiente = 1;

  constructor()
  {
    this.#inicializarProductos();
  }

  agregarProducto = (producto: Producto) =>
    this.productos.set([...this.productos(), producto]);

  getProductById = (id: number): Producto | undefined =>
    this.productos().find(producto => producto.id === id);

  #inicializarProductos()
  {
    this.productos.set([
      { descripcion: 'Producto 1', id: this.#idSiguiente++, precio: 100 },
      { descripcion: 'Producto 2', id: this.#idSiguiente++, precio: 200 },
      { descripcion: 'Producto 3', id: this.#idSiguiente++, precio: 300 },
    ]);
  }
}
