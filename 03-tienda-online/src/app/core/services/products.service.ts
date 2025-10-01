import { Injectable, signal } from '@angular/core';
import { Producto } from '@core/interfaces/producto.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductsService
{
  detalleProducto = signal<Producto | undefined>(undefined);

  public productos = signal<Producto[]>([
    { descripcion: 'Pantalon', precio: 130 },
    { descripcion: 'Camisa', precio: 80 },
    { descripcion: 'Playera', precio: 50 },
  ]);

  agregarProducto(producto: Producto)
  {
    this.productos.set([...this.productos(), producto]);
  }
}
