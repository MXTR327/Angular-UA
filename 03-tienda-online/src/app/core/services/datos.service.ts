import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Producto } from '@core/interfaces/producto.interface';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DatosService
{
  #http = inject(HttpClient);

  #url = environment.firebaseConfig.databaseURL;

  agregarProducto(producto: Producto): Observable<object>
  {
    return this.#http.post(`${this.#url}/datos.json`, producto);
  }

  eliminarProducto(llave: string): Observable<object>
  {
    return this.#http.delete(`${this.#url}/datos/${llave}.json`);
  }

  listarProductos(): Observable<Record<string, Producto>>
  {
    return this.#http.get<Record<string, Producto>>(`${this.#url}/datos.json`);
  }

  modificarProducto(producto: Producto, llave: string): Observable<object>
  {
    return this.#http.put(`${this.#url}/datos/${llave}.json`, producto);
  }
}
